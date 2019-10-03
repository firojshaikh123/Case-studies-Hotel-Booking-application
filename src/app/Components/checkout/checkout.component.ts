import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  data_hotelNameInput: string;
  data_cityNameeInput: string;
  data_locationNameInput: string;
  data_checkInInput: string;
  data_checkOutInput: string;
  data_FirstNameInput: string;
  data_LastNameInput: string;

  constructor() { }

  ngOnInit() {
    this.data_cityNameeInput = localStorage.getItem('cityNameeInput');
    this.data_locationNameInput = localStorage.getItem('locationNameInput');
    this.data_hotelNameInput = localStorage.getItem('hotelNameInput');
    this.data_checkInInput = localStorage.getItem('checkInInput');
    this.data_checkOutInput = localStorage.getItem('checkOutInput');
    this.data_FirstNameInput = localStorage.getItem('FirstNameInput');
    this.data_LastNameInput = localStorage.getItem('LastNameInput');
  }

}
