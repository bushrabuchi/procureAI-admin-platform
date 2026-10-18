import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatSlideToggleModule],
  styleUrl: './settings.scss',
  templateUrl: './settings.html',
})
export class Settings {
  readonly theme = inject(ThemeService);
}
