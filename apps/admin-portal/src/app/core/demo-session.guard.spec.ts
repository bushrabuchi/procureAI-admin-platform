import { TestBed } from '@angular/core/testing';

import { provideRouter, Router, UrlTree } from '@angular/router';

import { DemoSessionService } from './services/demo-session.service';
import { demoSessionGuard } from './demo-session.guard';

describe('Demo session navigation', () => {
  beforeEach(() => {
    sessionStorage.clear();

    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
  });

  function check() {
    return TestBed.runInInjectionContext(() => demoSessionGuard({} as never, {} as never));
  }

  it('redirects a signed-out visit to the demo entry', () => {
    const result = check() as UrlTree;

    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/login');
  });

  it('allows entry, then rejects access after sign out', () => {
    const session = TestBed.inject(DemoSessionService);

    session.enter();

    expect(check()).toBe(true);

    session.signOut();

    const result = check() as UrlTree;

    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/login');
  });

  it('restores an active session from browser storage', () => {
    TestBed.inject(DemoSessionService).enter();

    const restoredSession = new DemoSessionService();

    expect(restoredSession.active()).toBe(true);
  });
});
