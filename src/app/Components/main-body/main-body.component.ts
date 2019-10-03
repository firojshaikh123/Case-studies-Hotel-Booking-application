import { Component, OnInit } from '@angular/core';
import { Hoteldata } from 'src/app/Model/Hoteldata';
import { HoteldataService } from 'src/app/Service/hoteldata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  public lstHotel: Hoteldata[] = [];
  constructor(public hotelService: HoteldataService, private router: Router) { }

  ngOnInit() {
    this.hotelService.GetFilterHotelData('Hinjewadi',1,1).subscribe(data => this.lstHotel = data);
  }

  _state: number;
  _city: number;
  _loc: string;

  getSearchParameters(message) {
    this._state = message.State;
    this._city = message.City;
    this._loc = message.Loc;

    this.getFilteredRecord();
  }

  getFilteredRecord() {
    if(this._loc==""){
      this._loc="Hinjewadi";
    }
     this.hotelService.GetFilterHotelData(this._loc,this._city,this._state).subscribe(data => this.lstHotel = data);
  }

  onBookingSelect(hotelId) {
    this.router.navigate(['BookingDetails', hotelId])
  }
}
