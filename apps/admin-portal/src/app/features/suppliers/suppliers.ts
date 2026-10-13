import {
  AfterViewInit,
  Component,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatCardModule } from '@angular/material/card';

import { Supplier, SupplierStatus } from '../../core/models/supplier.model';
import { SupplierService } from '../../core/services/supplier.service';
import { ConfirmDialog } from '../../shared/confirm-dialog/confirm-dialog';

@Component({
  imports: [
    RouterLink,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
  ],
  selector: 'app-suppliers',
  styleUrl: './suppliers.scss',
  templateUrl: './suppliers.html',
})
export class Suppliers implements AfterViewInit {
  readonly supplierService = inject(SupplierService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly searchTerm = signal('');
  readonly selectedStatus = signal('All');

  readonly displayedColumns = ['name', 'category', 'city', 'email', 'status', 'actions'];

  readonly dataSource = new MatTableDataSource<Supplier>([]);
  readonly filteredSuppliers = computed(() => {
    return this.supplierService.suppliers().filter((supplier) => {
      const search = this.searchTerm().toLowerCase().trim();
      const status = this.selectedStatus();
      const matchesSearch = [supplier.name, supplier.email, supplier.category, supplier.city].some(
        (value) => value.toLowerCase().includes(search),
      );
      const matchesStatus = status === 'All' || supplier.status === status;

      return matchesSearch && matchesStatus;
    });
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    effect(() => {
      this.dataSource.data = this.filteredSuppliers();
      this.dataSource.paginator?.firstPage();
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteSupplier(supplier: Supplier): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '420px',
      data: {
        title: 'Delete Supplier',
        message: `Delete ${supplier.name}? This action cannot be undone.`,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed === true) {
        this.supplierService.delete(supplier.id);

        this.snackBar.open('Supplier deleted successfully', 'Close', { duration: 3000 });
      }
    });
  }
}
