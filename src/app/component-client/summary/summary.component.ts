import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {


  @Input() lastname : string = "";
  @Input() firstname : string = "";
  @Input() zipCode : string = "";
  @Input() tel : string = "";
  @Input() email : string = "";
  @Input() gender : string = "";
  @Input() login : string = "";
  @Input() password : string = "";
  @Input() passwordCheck : string = "";

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


  Close () {
    this.change.emit(false);
  }




}
