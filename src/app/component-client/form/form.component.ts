import { Component } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() {
  }

  ngLastname : string = "";
  ngFirstname : string = "";
  ngZipCode : string = "";
  ngTel : string = "";
  ngEmail : string = "";
  ngGender : string = "";
  ngLogin : string = "";
  ngPassword : string = "";
  ngPasswordCheck : string = "";

  showSummary = false


  clicChange (val : boolean) {
    this.showSummary = val
  }

}
