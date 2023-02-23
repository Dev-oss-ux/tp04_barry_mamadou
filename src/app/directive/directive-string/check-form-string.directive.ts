import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckFormString]'
})
export class CheckFormStringDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void }) => {
      if ((event.which > 64 && event.which < 91) || (event.which > 96 && event.which < 123)) { // A-Z, a-z
        //event.preventDefault();
        this._element.nativeElement.style.backgroundColor = "#90EE90";

      }
      else {
        this._element.nativeElement.style.backgroundColor = "red";
      }
    }
  }




  // @HostListener('click') onclick() {
  //   this._element.nativeElement.style.backgroundColor = 'red';

  // }




}
