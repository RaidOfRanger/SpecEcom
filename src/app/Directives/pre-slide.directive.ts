import { Directive ,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreSlide]'
})
export class PreSlideDirective {

  constructor(private el : ElementRef) {    
    
  }

  @HostListener('click')
  nextfun(){
    console.log("hellow");
    
    console.log(this.el.nativeElement);
    
  }

}
