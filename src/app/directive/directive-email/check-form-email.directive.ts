import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckFormEmail]'
})
export class CheckFormEMailDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void }) => {
      if ((event.which > 63 && event.which < 91) || (event.which > 96 && event.which < 123) || (event.which > 47 && event.which < 58)) { // A-Z, a-z
        //event.preventDefault();
        this._element.nativeElement.style.backgroundColor = "#90EE90";

      }
      else {
        this._element.nativeElement.style.backgroundColor = "red";
      }

    }
  }

}
