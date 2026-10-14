import { Injectable, computed, signal } from '@angular/core';
import { PurchaseOrder, PurchaseOrderPayload, ApprovalEvent } from '../models/purchase-order.model';

const STORAGE_KEY = 'procureai_orders';

@Injectable({ providedIn: 'root' })
export class PurchaseOrderService {
  private readonly state = signal<PurchaseOrder[]>(this.load());

  readonly orders = this.state.asReadonly();

  readonly pendingOrders = computed(() =>
    this.orders().filter((o) => o.status === 'Pending Approval'),
  );

  readonly approvedOrders = computed(() => this.orders().filter((o) => o.status === 'Approved'));

  readonly totalOrders = computed(() => this.orders().length);

  private load(): PurchaseOrder[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state()));
  }

  getById(id: string): PurchaseOrder | undefined {
    return this.orders().find((o) => o.id === id);
  }

  create(payload: PurchaseOrderPayload, supplierName: string): PurchaseOrder {
    const order: PurchaseOrder = {
      ...payload,
      items: payload.items.map((item) => ({ ...item })),
      id: crypto.randomUUID(),
      supplierName,
      status: 'Draft',
      createdAt: new Date().toISOString(),
      history: [],
    };
    this.state.update((orders) => [order, ...orders]);
    this.save();
    return order;
  }

  update(id: string, payload: PurchaseOrderPayload, supplierName: string): boolean {
    const existing = this.getById(id);
    if (!existing || existing.status !== 'Draft') return false;

    this.state.update((orders) =>
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              ...payload,
              items: payload.items.map((item) => ({ ...item })),
              supplierName,
            }
          : order,
      ),
    );

    this.save();
    return true;
  }

  private transition(
    id: string,
    from: PurchaseOrder['status'],
    to: PurchaseOrder['status'],
    event: ApprovalEvent,
  ): boolean {
    const order = this.getById(id);
    if (!order || order.status !== from) return false;

    this.state.update((orders) =>
      orders.map((o) =>
        o.id === id
          ? {
              ...o,
              status: to,
              history: [...o.history, event],
            }
          : o,
      ),
    );

    this.save();
    return true;
  }

  submit(id: string): boolean {
    return this.transition(id, 'Draft', 'Pending Approval', {
      action: 'Submitted',
      actor: 'Demo Requester',
      date: new Date().toISOString(),
    });
  }

  approve(id: string): boolean {
    return this.transition(id, 'Pending Approval', 'Approved', {
      action: 'Approved',
      actor: 'Demo Approver',
      date: new Date().toISOString(),
    });
  }

  reject(id: string, reason: string): boolean {
    if (!reason.trim()) return false;

    return this.transition(id, 'Pending Approval', 'Rejected', {
      action: 'Rejected',
      actor: 'Demo Approver',
      date: new Date().toISOString(),
      comment: reason.trim(),
    });
  }

  deleteDraft(id: string): boolean {
    const order = this.getById(id);
    if (!order || order.status !== 'Draft') return false;

    this.state.update((orders) => orders.filter((o) => o.id !== id));
    this.save();
    return true;
  }
}
