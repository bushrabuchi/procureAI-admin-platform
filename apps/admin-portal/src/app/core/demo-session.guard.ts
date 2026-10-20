import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

import { DemoSessionService } from './services/demo-session.service';

export const demoSessionGuard: CanActivateChildFn = () => {
  const session = inject(DemoSessionService);
  const router = inject(Router);

  return session.active() ? true : router.createUrlTree(['/login']);
};
