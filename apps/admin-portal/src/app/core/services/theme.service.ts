import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(true);

  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle('dark-theme', dark);
      document.documentElement.classList.toggle('light-theme', !dark);
    });
  }

  toggleTheme() {
    this.isDark.update((value) => !value);
  }
}
