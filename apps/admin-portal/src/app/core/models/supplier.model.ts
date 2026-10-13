export type SupplierStatus = 'Active' | 'Pending' | 'Suspended';

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  vatNumber: string;
  status: SupplierStatus;
  createdAt: string;
}

export type SupplierPayload = Omit<Supplier, 'id' | 'createdAt'>;
