import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly menuOpen = signal(false);

  // Check the deployed Supplier Portal URL before publishing.
  readonly supplierPortalUrl = 'https://procure-ai-supplier-portal.vercel.app/';

  readonly features = [
    {
      icon: '▤',
      title: 'RFQ Management',
      description: 'Organize quotation requests, view details and track statuses.',
    },
    {
      icon: '♧',
      title: 'Supplier Workspace',
      description: 'Explore RFQ opportunities and quotation-related interactions.',
    },
    {
      icon: '⇄',
      title: 'Portal Navigation',
      description: 'Access dedicated buyer and supplier frontend workspaces.',
    },
    {
      icon: '✓',
      title: 'Approval Concepts',
      description: 'Explore the intended procurement review and approval process.',
    },
    {
      icon: '▥',
      title: 'Purchase Order Concepts',
      description: 'Understand the intended journey from quotation to order.',
    },
    {
      icon: '◫',
      title: 'Dashboard Experience',
      description: 'View sample summaries, statuses and responsive dashboards.',
    },
  ];

  readonly stats = [
    { label: 'Sample RFQs', value: '12' },
    { label: 'Supplier quotes', value: '08' },
    { label: 'Pending reviews', value: '03' },
  ];

  readonly recentRfqs = [
    {
      title: 'Office equipment',
      reference: 'RFQ-001 · IT & supplies',
      status: 'Open',
    },
    {
      title: 'Industrial components',
      reference: 'RFQ-002 · Operations',
      status: 'Review',
    },
    {
      title: 'Software licenses',
      reference: 'RFQ-003 · Technology',
      status: 'Open',
    },
  ];

  readonly workflow = [
    {
      title: 'Create an RFQ',
      description: 'A buyer defines requirements and requests quotations.',
    },
    {
      title: 'Review supplier quotes',
      description: 'Suppliers respond and the buyer evaluates offers.',
    },
    {
      title: 'Approve selection',
      description: 'Review and approval stages guide the purchasing decision.',
    },
    {
      title: 'Issue purchase order',
      description: 'The approved offer progresses toward an order.',
    },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
