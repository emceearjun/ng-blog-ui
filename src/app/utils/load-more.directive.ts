import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[loadMore]',
})
export class LoadMoreDirective implements AfterContentInit {
  @Input() lineHeight: string = '1rem';
  @Input() lines: number = 5;
  @Input() linkText: string = 'Load More';
  @Input() linkUrl: string = '#';

  private nativeElement: HTMLElement;
  private elementStyles: CSSStyleDeclaration;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'red'
    this.nativeElement = this.el.nativeElement;
    this.elementStyles = this.nativeElement.style;
  }

  ngAfterContentInit() {
    this.elementStyles.maxHeight = `calc(${this.lineHeight} * ${this.lines})`;
    this.elementStyles.lineHeight = this.lineHeight;

    // Overflowing content
    if (this.nativeElement.scrollHeight > this.nativeElement.offsetHeight) {
      this.elementStyles.overflow = 'hidden';
      const wrapperElement = this.createWrapperElement();
      let link = this.createLink();
      wrapperElement.appendChild(link);
    }
  }

  private createLink(): HTMLAnchorElement {
    const link = <HTMLAnchorElement>this.renderer.createElement('a');
    link.innerText = this.linkText;
    link.href = this.linkUrl;
    link.target = "_blank";

    link.classList.add('load-more');

    return link;
  }

  private createWrapperElement(): HTMLDivElement {
    const parent = this.nativeElement.parentNode;
    const wrapper = this.renderer.createElement('div');
    this.renderer.insertBefore(parent, wrapper, this.nativeElement);
    this.renderer.appendChild(wrapper, this.nativeElement);

    return wrapper;
  }
}
