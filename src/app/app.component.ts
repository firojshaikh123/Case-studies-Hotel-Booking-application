import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelBookingApp';

  @Output() _SearchModelData = new EventEmitter<any>();

  serach(locInputVal,cityInputVal,stateInputVal){
    //alert('hi - '+locInputVal +' - '+ cityInputVal + '-' + stateInputVal);
    this._SearchModelData.emit({State: stateInputVal, City: cityInputVal, Loc: locInputVal});
  }
}


