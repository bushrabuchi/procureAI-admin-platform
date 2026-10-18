import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './workspace.html',

  // Reuse your existing workspace layout styles.
  styleUrl: '../../app.scss',
})
export class Workspace {
  readonly mobileMenuOpen = signal(false);

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
