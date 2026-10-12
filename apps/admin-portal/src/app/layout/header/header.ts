import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bell, ChevronDown, Moon, Search, Sun } from 'lucide';
import { ThemeService } from '../../core/services/theme.service';
import { IconComponent } from '../../shared/icon/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly icons = { Search, Bell, Moon, Sun, ChevronDown };
  readonly profileOpen = signal(false);
  readonly notificationsOpen = signal(false);
  readonly search = signal('');

  readonly notifications = [
    'Purchase order PO-1042 needs approval',
    'New supplier registration received',
    'Monthly spending report is available',
  ];

  constructor(public theme: ThemeService) {}

  toggleProfile() {
    this.profileOpen.update((v) => !v);
    this.notificationsOpen.set(false);
  }

  toggleNotifications() {
    this.notificationsOpen.update((v) => !v);
    this.profileOpen.set(false);
  }
}
