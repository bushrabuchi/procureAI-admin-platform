import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PurchaseOrderService } from '../../core/services/purchase-order.service';
import { PurchaseOrder, calculateOrderTotals } from '../../core/models/purchase-order.model';
import { RejectionDialog } from './rejection-dialog/rejection-dialog';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './approvals.html',
  styleUrl: './approvals.scss',
})
export class Approvals {
  readonly service = inject(PurchaseOrderService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  total(order: PurchaseOrder) {
    return calculateOrderTotals(order.items).total;
  }

  approve(order: PurchaseOrder) {
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Approve Purchase Order',
        message: `Approve PO-${order.id.slice(0, 8)}?`,
      },
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed !== true) return;

      if (this.service.approve(order.id)) {
        this.snack.open('Purchase order approved', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  reject(order: PurchaseOrder) {
    const ref = this.dialog.open(RejectionDialog, {
      width: '450px',
    });

    ref.afterClosed().subscribe((reason: string | undefined) => {
      if (!reason) return;

      if (this.service.reject(order.id, reason)) {
        this.snack.open('Purchase order rejected', 'Close', {
          duration: 3000,
        });
      }
    });
  }
}
