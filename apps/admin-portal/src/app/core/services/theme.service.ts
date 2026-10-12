import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(false);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark-theme', this.isDark());
    });
  }

  toggleTheme() {
    this.isDark.update((value) => !value);
  }
}
