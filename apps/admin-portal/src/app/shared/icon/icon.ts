import { Component, ElementRef, Input, OnChanges, inject } from '@angular/core';
import { createElement, type IconNode } from 'lucide';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: '',
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) img!: IconNode;
  @Input() size = 20;

  private element = inject(ElementRef<HTMLElement>);

  ngOnChanges(): void {
    this.renderIcon();
  }

  private renderIcon(): void {
    const svg = createElement(this.img, {
      width: this.size,
      height: this.size,
      'stroke-width': 2,
      'aria-hidden': 'true',
      focusable: 'false',
    });

    this.element.nativeElement.replaceChildren(svg);
  }
}
