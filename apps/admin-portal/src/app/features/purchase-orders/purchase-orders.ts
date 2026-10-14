import {
  Component,
  AfterViewInit,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { PurchaseOrderService } from '../../core/services/purchase-order.service';
import { PurchaseOrder, calculateOrderTotals } from '../../core/models/purchase-order.model';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    DatePipe,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './purchase-orders.html',
  styleUrl: './purchase-orders.scss',
})
export class PurchaseOrders implements AfterViewInit {
  readonly service = inject(PurchaseOrderService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  readonly search = signal('');
  readonly status = signal('All');

  readonly columns = [
    'id',
    'supplierName',
    'department',
    'total',
    'createdAt',
    'status',
    'actions',
  ];

  readonly dataSource = new MatTableDataSource<PurchaseOrder>([]);

  readonly filtered = computed(() => {
    const query = this.search().toLowerCase().trim();

    return this.service
      .orders()
      .filter(
        (order) =>
          (this.status() === 'All' || order.status === this.status()) &&
          (order.id.toLowerCase().includes(query) ||
            order.supplierName.toLowerCase().includes(query) ||
            order.department.toLowerCase().includes(query)),
      );
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource.sortingDataAccessor = (order, column) =>
      column === 'total'
        ? this.total(order)
        : column === 'createdAt'
          ? new Date(order.createdAt).getTime()
          : String(order[column as keyof PurchaseOrder] ?? '');

    effect(() => {
      this.dataSource.data = this.filtered();
      this.dataSource.paginator?.firstPage();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  total(order: PurchaseOrder): number {
    return calculateOrderTotals(order.items).total;
  }

  deleteOrder(order: PurchaseOrder) {
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Delete Draft',
        message: `Delete draft order ${order.id.slice(0, 8)}?`,
      },
    });

    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed === true) {
        if (this.service.deleteDraft(order.id)) {
          this.snack.open('Draft deleted', 'Close', { duration: 3000 });
        }
      }
    });
  }
}
