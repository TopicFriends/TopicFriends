import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable()
export class ScrollingService {

  private renderer: Renderer2;

  constructor(
    public rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public enableScrolling() {
    this.renderer.removeClass(document.body, 'disable-scrolling');
  }


  public disableScrolling() {
    this.renderer.addClass(document.body, 'disable-scrolling');
  }

}
