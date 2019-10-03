import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Roomdata } from 'src/app/Model/Roomdata';
import { Hoteldata } from 'src/app/Model/Hoteldata';

import { RoomdataService } from 'src/app/Service/roomdata.service';
import { HoteldataService } from 'src/app/Service/hoteldata.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  public lstRoomtype: Roomdata[] = [];
  public lstHotel: Hoteldata[] = [];
  public dataHotel: Hoteldata;

  constructor(private route: ActivatedRoute, private roomservice: RoomdataService, public hotelService: HoteldataService, private router: Router) {


  }

  hotelId: number;
  hotel_name: string;
  Price: number;
  hotel_image: string;
  city_name: string;
  location_name: string;
  rentId: number;
  locationId: number;
  
  ngOnInit() {
    this.hotelId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.roomservice.getRoomData().subscribe(data => this.lstRoomtype = data);
    this.hotelService.GetHotelData(this.hotelId).subscribe((data) => {this.dataHotel = data;
      this.onBookingSelect();
    });

  }

  onBookingSelect() {
    this.Price = this.dataHotel.price;
    this.city_name = this.dataHotel.city_name;
    this.hotel_name = this.dataHotel.hotel_name;
    this.hotel_image = this.dataHotel.image_name;
    this.location_name = this.dataHotel.location_name;
    this.rentId = this.dataHotel.rent_id;
    this.locationId = this.dataHotel.location_id;
    console.log(this.dataHotel);
  }

  onBookNow(hotelId, hotelName, checkInInput, checkOutInput, roomTypeInput, priceInput, rentIdInput, locationIdInput) {
    localStorage.setItem('hotelImageInput', this.hotel_image);
    localStorage.setItem('hotelNameInput', this.hotel_name);
    localStorage.setItem('cityNameeInput', this.city_name);
    localStorage.setItem('locationNameInput', this.location_name);
    localStorage.setItem('checkInInput', checkInInput);
    localStorage.setItem('checkOutInput', checkOutInput);
    localStorage.setItem('rentIdInput', rentIdInput);
    localStorage.setItem('priceInput', priceInput);
    localStorage.setItem('locationIdInput', locationIdInput);
    console.log(priceInput);
    this.router.navigate(['BookingSummary', hotelId]);

  }

 

}
