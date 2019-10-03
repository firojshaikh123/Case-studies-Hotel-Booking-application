import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/Model/Guestuser';
import { BookingService } from 'src/app/Service/booking.service';
import { BookingData } from 'src/app/Model/BookingData';

import { Router } from '@angular/router';
@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  //publ obj123:BookingData;
  constructor(private route: ActivatedRoute, private Booking: BookingService,private router: Router) { }
  output: any;
  data_hotelId: number;
  data_checkInInput: string;
  data_checkOutInput: string;
  data_roomTypeInput: string;
  data_Price: number;
  data_rentIdInput: number;
  data_facilityIdInput: number;
  data_locationIdnput: number;

  data_hotelNameInput: string;
  data_cityNameeInput: string;
  data_locationNameInput: string;
  data_hotelImageInput: string;

  ngOnInit() {
    this.data_hotelId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.data_checkInInput = localStorage.getItem('checkInInput');
    this.data_checkOutInput = localStorage.getItem('checkOutInput');
    this.data_roomTypeInput = localStorage.getItem('roomTypeInput');
    this.data_Price = parseInt(localStorage.getItem('priceInput'));
    this.data_hotelNameInput = localStorage.getItem('hotelNameInput');
    this.data_cityNameeInput = localStorage.getItem('cityNameeInput');
    this.data_locationNameInput = localStorage.getItem('locationNameInput');
    this.data_hotelImageInput = localStorage.getItem('hotelImageInput');
    this.data_rentIdInput = parseInt(localStorage.getItem('rentIdInput'));
    console.log(localStorage.getItem('rentIdInput'));
    this.data_locationIdnput = parseInt(localStorage.getItem('locationIdInput'));
    console.log(localStorage.getItem('locationIdInput'));
  }

  userModel = new User('', '', '', '')
  bookingModel = new BookingData('', '', '', '', '', 0, 0, 0, 0, 0, '', '', 0)

  SetBookingData() {

    this.bookingModel.BookingId = 0;
    this.bookingModel.FirstName = this.userModel.FirstName;
    this.bookingModel.LastName = this.userModel.LastName;
    this.bookingModel.Email = this.userModel.Email;
    this.bookingModel.Contact = this.userModel.ContactNo;
    this.bookingModel.hotel_id = this.data_hotelId;
    this.bookingModel.Price = this.data_Price + 246 + 181;
    this.bookingModel.CheckIn = this.data_checkInInput;
    this.bookingModel.CheckOut = this.data_checkOutInput;
    this.bookingModel.rent_id = this.data_rentIdInput;
    this.bookingModel.facility_id = this.data_facilityIdInput; //Need to fetch
    this.bookingModel.location_id = this.data_locationIdnput; //Need to fetch

    localStorage.setItem('FirstNameInput',this.bookingModel.FirstName);
    localStorage.setItem('LastNameInput',this.bookingModel.LastName);
  }

  onSubmit() {
    this.SetBookingData();
    this.Booking.PostBookingData(this.bookingModel).subscribe(data => { this.output = data });
    this.router.navigate(['Checkout']);
  }
}
