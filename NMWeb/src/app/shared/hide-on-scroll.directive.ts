import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]'
})
export class HideOnScrollDirective {
  @Input() scrollOffset = 1000;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(window.pageYOffset + this.scrollOffset> window.document.body.scrollHeight) {
      this.element.nativeElement.style.display = 'none';
    } else {
      this.element.nativeElement.style.display = 'block';
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
}
