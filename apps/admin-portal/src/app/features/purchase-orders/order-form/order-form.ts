import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs';

import { SupplierService } from '../../../core/services/supplier.service';
import { PurchaseOrderService } from '../../../core/services/purchase-order.service';
import { calculateOrderTotals, OrderItem } from '../../../core/models/purchase-order.model';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
})
export class OrderForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly orders = inject(PurchaseOrderService);
  private readonly snack = inject(MatSnackBar);

  readonly suppliers = inject(SupplierService);
  readonly editId = signal<string | null>(null);
  readonly notFound = signal(false);

  readonly departments = ['IT', 'Finance', 'HR', 'Operations', 'Procurement'];

  private createItem(item?: OrderItem) {
    return this.fb.nonNullable.group({
      description: [item?.description ?? '', Validators.required],
      quantity: [item?.quantity ?? 1, [Validators.required, Validators.min(1)]],
      unitPrice: [item?.unitPrice ?? 0, [Validators.required, Validators.min(0.01)]],
    });
  }

  readonly form = this.fb.nonNullable.group({
    supplierId: ['', Validators.required],
    requestedBy: ['', Validators.required],
    department: ['', Validators.required],
    items: this.fb.array([this.createItem()]),
  });

  get items(): FormArray<ReturnType<typeof this.createItem>> {
    return this.form.controls.items;
  }

  private readonly formValue = toSignal(
    this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
  );

  readonly totals = computed(() => {
    this.formValue();
    return calculateOrderTotals(this.items.getRawValue());
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.editId.set(id);
    const order = this.orders.getById(id);

    if (!order || order.status !== 'Draft') {
      this.notFound.set(true);
      return;
    }

    this.form.patchValue({
      supplierId: order.supplierId,
      requestedBy: order.requestedBy,
      department: order.department,
    });

    this.items.clear();
    order.items.forEach((item) => this.items.push(this.createItem(item)));
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  save(submitForApproval = false): void {
    if (this.notFound()) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = this.form.getRawValue();
    const supplier = this.suppliers.getById(payload.supplierId);

    if (!supplier || supplier.status !== 'Active') {
      this.snack.open('Select an active supplier', 'Close');
      return;
    }

    const id = this.editId();
    let orderId: string;

    if (id) {
      if (!this.orders.update(id, payload, supplier.name)) {
        this.snack.open('Cannot update this order', 'Close');
        return;
      }
      orderId = id;
    } else {
      orderId = this.orders.create(payload, supplier.name).id;
    }

    if (submitForApproval && !this.orders.submit(orderId)) {
      this.snack.open('Could not submit order', 'Close');
      return;
    }

    this.snack.open(submitForApproval ? 'Order submitted for approval' : 'Draft saved', 'Close', {
      duration: 3000,
    });

    this.router.navigate(['/purchase-orders', orderId]);
  }
}
