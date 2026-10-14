export type OrderStatus = 'Draft' | 'Pending Approval' | 'Approved' | 'Rejected';

export interface OrderItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface ApprovalEvent {
  action: 'Submitted' | 'Approved' | 'Rejected';
  actor: string;
  date: string;
  comment?: string;
}

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  supplierName: string;
  requestedBy: string;
  department: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string;
  history: ApprovalEvent[];
}

export type PurchaseOrderPayload = Pick<
  PurchaseOrder,
  'supplierId' | 'requestedBy' | 'department' | 'items'
>;

export const VAT_RATE = 0.15;

export function calculateOrderTotals(items: OrderItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

  const vat = Math.round(subtotal * VAT_RATE * 100) / 100;

  return {
    subtotal,
    vat,
    total: Math.round((subtotal + vat) * 100) / 100,
  };
}
