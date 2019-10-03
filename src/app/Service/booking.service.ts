import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { BookingData } from '../Model/BookingData';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  PostBookingData(bookingdata: BookingData) {
    let header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post('http://localhost:61107/Home/SaveBooking/', JSON.stringify(bookingdata), { headers: header });
  }
}
