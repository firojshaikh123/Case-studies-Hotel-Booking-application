import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';
import {Hoteldata} from '../Model/Hoteldata';


@Injectable({
  providedIn: 'root'
})
export class HoteldataService {

  //private _url:string = "assets/datajson/hotel.json";
  constructor(private http:HttpClient) { }

  // getHotelData():Observable<Hoteldata[]>{
  //   return this.http.get<Hoteldata[]>(this._url);
    
  // }

  private _urlHotelList:string = "http://localhost:61107/Home/GetHotelData/";
  GetFilterHotelData(location: string, cityid: number, stateid: number):Observable<Hoteldata[]>{
    return this.http.get<Hoteldata[]>(this._urlHotelList + location +'/'+ cityid +'/'+ stateid);
 }

 private _urlHoteldata:string = "http://localhost:61107/Home/GetHotelDataById/";
 GetHotelData(hotelid: number):Observable<Hoteldata>{
   return this.http.get<Hoteldata>(this._urlHoteldata + hotelid);
}

}
