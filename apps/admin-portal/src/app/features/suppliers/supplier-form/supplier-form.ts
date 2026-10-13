import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SupplierService } from '../../../core/services/supplier.service';
import { SupplierPayload, SupplierStatus } from '../../../core/models/supplier.model';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './supplier-form.html',
  styleUrl: './supplier-form.scss',
})
export class SupplierForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly service = inject(SupplierService);
  private readonly snackBar = inject(MatSnackBar);

  readonly isEditMode = signal(false);
  readonly supplierId = signal<string | null>(null);
  readonly notFound = signal(false);

  readonly categories = [
    'IT & Technology',
    'Industrial Equipment',
    'Office Supplies',
    'Construction',
    'Logistics',
    'Professional Services',
    'Other',
  ];

  readonly cities = ['Riyadh', 'Jeddah', 'Dammam', 'Al Khobar', 'Dhahran', 'Other'];

  readonly statuses: SupplierStatus[] = ['Active', 'Pending', 'Suspended'];

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\+9665\d{8}$/)]],
    category: ['', Validators.required],
    city: ['', Validators.required],
    vatNumber: ['', [Validators.required, Validators.pattern(/^3\d{13}3$/)]],
    status: this.fb.nonNullable.control<SupplierStatus>('Pending', Validators.required),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.isEditMode.set(true);
    this.supplierId.set(id);

    const supplier = this.service.getById(id);

    if (!supplier) {
      this.notFound.set(true);
      return;
    }

    this.form.patchValue({
      name: supplier.name,
      email: supplier.email,
      phone: supplier.phone,
      category: supplier.category,
      city: supplier.city,
      vatNumber: supplier.vatNumber,
      status: supplier.status,
    });
  }

  saveSupplier(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: SupplierPayload = this.form.getRawValue();
    const id = this.supplierId();

    if (this.isEditMode() && id) {
      if (!this.service.update(id, payload)) {
        this.snackBar.open('Supplier not found', 'Close', {
          duration: 3000,
        });
        return;
      }
    } else {
      this.service.add(payload);
    }

    this.snackBar.open(
      this.isEditMode() ? 'Supplier updated successfully' : 'Supplier added successfully',
      'Close',
      { duration: 3000 },
    );

    this.router.navigate(['/suppliers']);
  }
}
