import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appCheckFormNumber]'
})
export class CheckFormNumberDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void }) => {
      if (event.which < 48 || event.which > 57) { // 0-9
        //event.preventDefault();
        this._element.nativeElement.style.backgroundColor = "red";

      }
      else {
        this._element.nativeElement.style.backgroundColor = "#90EE90";
      }
    }
  }

}
