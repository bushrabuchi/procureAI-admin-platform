import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rejection-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Reject Purchase Order</h2>

    <mat-dialog-content>
      <p>Please provide a reason for rejection.</p>

      <mat-form-field appearance="outline" style="width:100%">
        <mat-label>Rejection reason</mat-label>
        <textarea matInput rows="4" [formControl]="reason"></textarea>

        @if (reason.hasError('required')) {
          <mat-error>Reason is required</mat-error>
        } @else if (reason.hasError('minlength')) {
          <mat-error>Enter at least 10 characters</mat-error>
        }
      </mat-form-field>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="dialog.close()">Cancel</button>
      <button
        mat-flat-button
        [disabled]="reason.invalid"
        (click)="dialog.close(reason.value.trim())"
      >
        Reject Order
      </button>
    </mat-dialog-actions>
  `,
})
export class RejectionDialog {
  readonly dialog = inject(MatDialogRef<RejectionDialog>);

  readonly reason = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(10)],
  });
}
