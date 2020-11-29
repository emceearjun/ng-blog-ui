import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(public sanitized: DomSanitizer) {}

  transform(html: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(html);
  }

}
