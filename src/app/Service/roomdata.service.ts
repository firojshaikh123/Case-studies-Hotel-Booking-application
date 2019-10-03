import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Roomdata} from '../Model/Roomdata';

@Injectable({
  providedIn: 'root'
})
export class RoomdataService {

  private _url:string = "assets/datajson/Room.json";
  constructor(private http:HttpClient) { }

  getRoomData():Observable<Roomdata[]>{
     return this.http.get<Roomdata[]>(this._url);
  }
}
