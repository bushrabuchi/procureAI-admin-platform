import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bell, ChevronDown, Moon, Search, Sun } from 'lucide';
import { ThemeService } from '../../core/services/theme.service';
import { IconComponent } from '../../shared/icon/icon';
import { DemoSessionService } from '../../core/services/demo-session.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink, MatButtonModule, MatMenuModule, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly session = inject(DemoSessionService);
  private readonly router = inject(Router);
  readonly icons = { Search, Bell, Moon, Sun, ChevronDown };
  readonly search = signal('');

  readonly notifications = [
    'Purchase order PO-1042 needs approval',
    'New supplier registration received',
    'Monthly spending report is available',
  ];

  constructor(public theme: ThemeService) {}

  signOut(): void {
    this.session.signOut();

    void this.router.navigate(['/login'], { replaceUrl: true });
  }
}
