import { Routes } from '@angular/router';
import { demoSessionGuard } from './core/demo-session.guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/demo-login/demo-login').then((m) => m.DemoLogin),
  },
  {
    path: '',
    loadComponent: () => import('./layout/workspace/workspace').then((m) => m.Workspace),
    canActivateChild: [demoSessionGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'suppliers',
        loadComponent: () => import('./features/suppliers/suppliers').then((m) => m.Suppliers),
      },
      {
        path: 'suppliers/add',
        loadComponent: () =>
          import('./features/suppliers/supplier-form/supplier-form').then((m) => m.SupplierForm),
      },
      {
        path: 'suppliers/:id/edit',
        loadComponent: () =>
          import('./features/suppliers/supplier-form/supplier-form').then((m) => m.SupplierForm),
      },
      {
        path: 'suppliers/:id',
        loadComponent: () =>
          import('./features/suppliers/supplier-details/supplier-details').then(
            (m) => m.SupplierDetails,
          ),
      },
      {
        path: 'purchase-orders',
        loadComponent: () =>
          import('./features/purchase-orders/purchase-orders').then((m) => m.PurchaseOrders),
      },

      {
        path: 'purchase-orders',
        loadComponent: () =>
          import('./features/purchase-orders/purchase-orders').then((m) => m.PurchaseOrders),
      },
      {
        path: 'purchase-orders/new',
        loadComponent: () =>
          import('./features/purchase-orders/order-form/order-form').then((m) => m.OrderForm),
      },
      {
        path: 'purchase-orders/:id/edit',
        loadComponent: () =>
          import('./features/purchase-orders/order-form/order-form').then((m) => m.OrderForm),
      },
      {
        path: 'purchase-orders/:id',
        loadComponent: () =>
          import('./features/purchase-orders/order-details/order-details').then(
            (m) => m.OrderDetails,
          ),
      },

      {
        path: 'approvals',
        loadComponent: () => import('./features/approvals/approvals').then((m) => m.Approvals),
      },
      {
        path: 'analytics',
        loadComponent: () => import('./features/analytics/analytics').then((m) => m.Analytics),
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
