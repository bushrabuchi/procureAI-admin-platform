import { Component, inject, signal } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { DemoSessionService } from '../../core/services/demo-session.service';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './demo-login.html',
  styleUrl: './demo-login.scss',
})
export class DemoLogin {
  private readonly formBuilder = inject(FormBuilder);
  private readonly session = inject(DemoSessionService);
  private readonly router = inject(Router);

  readonly passwordVisible = signal(false);
  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }

  enter(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.session.enter();

    void this.router.navigate(['/dashboard']);
  }
}
