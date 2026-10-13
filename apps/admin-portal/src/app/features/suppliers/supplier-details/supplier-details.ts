import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { SupplierService } from '../../../core/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.scss',
})
export class SupplierDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(SupplierService);

  readonly id = this.route.snapshot.paramMap.get('id') ?? '';

  readonly supplier = computed(() => this.service.getById(this.id));
}
