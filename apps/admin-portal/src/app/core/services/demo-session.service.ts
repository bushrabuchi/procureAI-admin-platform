import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoSessionService {
  private readonly key = 'procureai_admin_demo_session';

  readonly active = signal(sessionStorage.getItem(this.key) === 'active');

  enter(): void {
    sessionStorage.setItem(this.key, 'active');
    this.active.set(true);
  }

  signOut(): void {
    sessionStorage.removeItem(this.key);
    this.active.set(false);
  }
}
