import { Injectable, computed, signal } from '@angular/core';
import { Supplier, SupplierPayload } from '../models/supplier.model';

const STORAGE_KEY = 'procureai_suppliers';

const INITIAL_SUPPLIERS: Supplier[] = [
  {
    id: 'SUP-1001',
    name: 'Gulf Technology Co.',
    email: 'contact@gulftech.example',
    phone: '+966501234567',
    category: 'IT & Technology',
    city: 'Dammam',
    vatNumber: '300000000000003',
    status: 'Active',
    createdAt: '2026-09-10',
  },
  {
    id: 'SUP-1002',
    name: 'Eastern Industrial Supplies',
    email: 'sales@eastern.example',
    phone: '+966502345678',
    category: 'Industrial Equipment',
    city: 'Al Khobar',
    vatNumber: '300000000000003',
    status: 'Pending',
    createdAt: '2026-09-18',
  },
  {
    id: 'SUP-1003',
    name: 'Riyadh Office Solutions',
    email: 'info@riyadhoffice.example',
    phone: '+966503456789',
    category: 'Office Supplies',
    city: 'Riyadh',
    vatNumber: '300000000000003',
    status: 'Active',
    createdAt: '2026-10-01',
  },
];

@Injectable({ providedIn: 'root' })
export class SupplierService {
  private readonly suppliersState = signal<Supplier[]>(this.loadSuppliers());

  readonly suppliers = this.suppliersState.asReadonly();

  readonly totalSuppliers = computed(() => this.suppliers().length);

  readonly activeSuppliers = computed(
    () => this.suppliers().filter((supplier) => supplier.status === 'Active').length,
  );

  readonly pendingSuppliers = computed(
    () => this.suppliers().filter((supplier) => supplier.status === 'Pending').length,
  );

  private loadSuppliers(): Supplier[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Supplier[]) : INITIAL_SUPPLIERS;
    } catch {
      return INITIAL_SUPPLIERS;
    }
  }

  private persist(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.suppliersState()));
  }

  getById(id: string): Supplier | undefined {
    return this.suppliers().find((supplier) => supplier.id === id);
  }

  add(payload: SupplierPayload): Supplier {
    const supplier: Supplier = {
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString().slice(0, 10),
    };

    this.suppliersState.update((items) => [...items, supplier]);
    this.persist();
    return supplier;
  }

  update(id: string, payload: SupplierPayload): boolean {
    if (!this.getById(id)) return false;

    this.suppliersState.update((items) =>
      items.map((item) => (item.id === id ? { ...item, ...payload } : item)),
    );

    this.persist();
    return true;
  }

  delete(id: string): void {
    this.suppliersState.update((items) => items.filter((item) => item.id !== id));
    this.persist();
  }
}
