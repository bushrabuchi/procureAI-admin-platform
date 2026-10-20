import { PurchaseOrderService } from './purchase-order.service';

import { calculateOrderTotals, PurchaseOrderPayload } from '../models/purchase-order.model';

describe('Local purchase order workflow', () => {
  let service: PurchaseOrderService;

  const payload: PurchaseOrderPayload = {
    supplierId: 'SUP-1001',
    requestedBy: 'Demo Requester',
    department: 'IT',
    items: [
      {
        description: 'Monitor',
        quantity: 2,
        unitPrice: 100.25,
      },
    ],
  };

  beforeEach(() => {
    localStorage.clear();

    service = new PurchaseOrderService();
  });

  it('creates a draft and restores it from browser storage', () => {
    const order = service.create(payload, 'Demo Supplier');

    expect(order.status).toBe('Draft');

    const restoredService = new PurchaseOrderService();

    expect(restoredService.getById(order.id)?.supplierName).toBe('Demo Supplier');
  });

  it('requires submission before approval and records history', () => {
    const order = service.create(payload, 'Demo Supplier');

    expect(service.approve(order.id)).toBe(false);

    expect(service.submit(order.id)).toBe(true);

    expect(service.approve(order.id)).toBe(true);

    expect(service.approve(order.id)).toBe(false);

    expect(service.getById(order.id)?.history.map((event) => event.action)).toEqual([
      'Submitted',
      'Approved',
    ]);
  });

  it('blocks editing and deletion after submission', () => {
    const order = service.create(payload, 'Demo Supplier');

    service.submit(order.id);

    expect(service.update(order.id, payload, 'Changed')).toBe(false);

    expect(service.deleteDraft(order.id)).toBe(false);

    expect(service.getById(order.id)?.supplierName).toBe('Demo Supplier');
  });

  it('requires a rejection reason and stores a trimmed comment', () => {
    const order = service.create(payload, 'Demo Supplier');

    service.submit(order.id);

    expect(service.reject(order.id, '  ')).toBe(false);

    expect(service.reject(order.id, '  Budget exceeded  ')).toBe(true);

    const rejectedOrder = service.getById(order.id);

    expect(rejectedOrder?.status).toBe('Rejected');

    expect(rejectedOrder?.history.at(-1)?.comment).toBe('Budget exceeded');
  });

  it('calculates configured sample VAT and rounded totals', () => {
    expect(calculateOrderTotals(payload.items)).toEqual({
      subtotal: 200.5,
      vat: 30.08,
      total: 230.58,
    });
  });

  it('recovers from malformed saved JSON', () => {
    localStorage.setItem('procureai_orders', '{invalid');

    const restoredService = new PurchaseOrderService();

    expect(restoredService.orders()).toEqual([]);
  });
});
