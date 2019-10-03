import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Masterdata} from '../Model/MasterData';

@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  //private _url:string = "assets/datajson/test.json";
  private _url:string = " http://localhost:61107/Home/GetAll";
 
  constructor(private http:HttpClient) { }

  getMasterData():Observable<Masterdata[]>{
     return this.http.get<Masterdata[]>(this._url);
  }

  private _urlState:string = "http://localhost:61107/Home/GetAllState";
  getAllState():Observable<Masterdata[]>{
    return this.http.get<Masterdata[]>(this._urlState);
 }

 private _urlCity:string = "http://localhost:61107/Home/GetAllCity/";
 GetAllCity(stateid: number):Observable<Masterdata[]>{
   return this.http.get<Masterdata[]>(this._urlCity + stateid );
}
}
