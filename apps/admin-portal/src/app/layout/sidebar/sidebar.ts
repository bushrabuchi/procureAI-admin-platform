import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  ChartNoAxesCombined,
  CircleCheck,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide';
import { IconComponent } from '../../shared/icon/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, IconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly supplierPortalUrl = 'https://procure-ai-supplier-portal.vercelapp/';

  menu = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      route: '/dashboard',
    },
    {
      label: 'Suppliers',
      icon: Users,
      route: '/suppliers',
    },
    {
      label: 'Purchase Orders',
      icon: ShoppingCart,
      route: '/purchase-orders',
    },
    {
      label: 'Approvals',
      icon: CircleCheck,
      route: '/approvals',
    },
    {
      label: 'Analytics',
      icon: ChartNoAxesCombined,
      route: '/analytics',
    },
    {
      label: 'Settings',
      icon: Settings,
      route: '/settings',
    },
  ];
}
