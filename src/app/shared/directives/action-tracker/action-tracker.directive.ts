import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appActionTracker]'
})
export class ActionTrackerDirective {

  @HostListener('click') onClick() {
    console.log(this.el.nativeElement.outerHTML);
  }

  constructor(private el: ElementRef) {

  }

}
