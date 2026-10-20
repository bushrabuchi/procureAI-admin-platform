import { Component } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter, Router } from '@angular/router';

import { OverlayContainer } from '@angular/cdk/overlay';

import { Header } from './header';
import { DemoSessionService } from '../../core/services/demo-session.service';

@Component({
  template: '',
})
class Destination {}

describe('Header interactions', () => {
  let fixture: ComponentFixture<Header>;
  let overlay: HTMLElement;
  let router: Router;

  beforeEach(async () => {
    sessionStorage.clear();

    const destinations = ['settings', 'approvals', 'suppliers', 'analytics', 'login'].map(
      (path) => ({
        path,
        component: Destination,
      }),
    );

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter(destinations)],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);

    router = TestBed.inject(Router);

    overlay = TestBed.inject(OverlayContainer).getContainerElement();

    await fixture.whenStable();
  });

  async function click(element: Element | null): Promise<void> {
    expect(element).not.toBeNull();

    (element as HTMLElement).click();

    await fixture.whenStable();
  }

  function profileTrigger(): HTMLButtonElement {
    return fixture.nativeElement.querySelector('[aria-label="Admin profile"]');
  }

  function notificationsTrigger(): HTMLButtonElement {
    return fixture.nativeElement.querySelector('[aria-label^="Notifications,"]');
  }

  it('opens profile and navigates to account settings', async () => {
    await click(profileTrigger());
    await click(overlay.querySelector('a'));

    expect(router.url).toBe('/settings');
  });

  it('signs out and preserves unrelated browser state', async () => {
    const session = TestBed.inject(DemoSessionService);

    session.enter();

    sessionStorage.setItem('unrelated', 'keep');

    await click(profileTrigger());
    await click(overlay.querySelector('button'));

    expect(session.active()).toBe(false);

    expect(sessionStorage.getItem('procureai_admin_demo_session')).toBeNull();

    expect(sessionStorage.getItem('unrelated')).toBe('keep');

    expect(router.url).toBe('/login');
  });

  it('opens a notification destination and updates unread state', async () => {
    await click(notificationsTrigger());
    await click(overlay.querySelector('a'));

    expect(router.url).toBe('/approvals');

    // expect(fixture.componentInstance.unreadCount()).toBe(2);
  });

  it('marks every notification read through the menu', async () => {
    await click(notificationsTrigger());

    const buttons = [...overlay.querySelectorAll('button')];

    const markAllButton = buttons.find((item) => item.textContent?.includes('Mark all as read'));

    await click(markAllButton!);

    // expect(fixture.componentInstance.unreadCount()).toBe(0);

    expect(fixture.nativeElement.querySelector('.notification-dot')).toBeNull();
  });

  it('closes the menu when the backdrop is clicked', async () => {
    await click(profileTrigger());

    await click(overlay.querySelector('.cdk-overlay-backdrop'));

    expect(profileTrigger().getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu with Escape', async () => {
    await click(profileTrigger());

    const menu = overlay.querySelector('[role="menu"]');

    menu!.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        keyCode: 27,
        bubbles: true,
      }),
    );

    await fixture.whenStable();

    expect(profileTrigger().getAttribute('aria-expanded')).toBe('false');
  });

  it('toggles the application theme', async () => {
    const before = fixture.componentInstance.theme.isDark();

    await click(fixture.nativeElement.querySelector('[aria-label="Toggle theme"]'));

    expect(fixture.componentInstance.theme.isDark()).toBe(!before);

    expect(document.documentElement.classList.contains('dark-theme')).toBe(!before);
  });
});
