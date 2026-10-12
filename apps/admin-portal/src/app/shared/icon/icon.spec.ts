import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Search } from 'lucide';
import { IconComponent } from './icon';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('img', Search);
    fixture.componentRef.setInput('size', 18);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the provided Lucide icon at the requested size', () => {
    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg).toBeTruthy();
    expect(svg.getAttribute('width')).toBe('18');
    expect(svg.getAttribute('height')).toBe('18');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
  });
});
