import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PurchaseOrderService } from '../../../core/services/purchase-order.service';
import { calculateOrderTotals } from '../../../core/models/purchase-order.model';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss',
})
export class OrderDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(PurchaseOrderService);
  private readonly snack = inject(MatSnackBar);

  readonly id = this.route.snapshot.paramMap.get('id') ?? '';
  readonly order = computed(() => this.service.getById(this.id));

  readonly totals = computed(() => {
    const order = this.order();
    return order ? calculateOrderTotals(order.items) : null;
  });

  submit() {
    if (this.service.submit(this.id)) {
      this.snack.open('Order submitted for approval', 'Close', {
        duration: 3000,
      });
    }
  }
}
