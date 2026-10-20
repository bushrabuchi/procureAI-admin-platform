import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Workspace } from './workspace';

describe('Workspace layout', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Workspace],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the header, sidebar and page outlet', async () => {
    const fixture = TestBed.createComponent(Workspace);

    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-header')).not.toBeNull();

    expect(element.querySelector('app-sidebar')).not.toBeNull();

    expect(element.querySelector('router-outlet')).not.toBeNull();
  });
});
