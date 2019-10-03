import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Masterdata } from 'src/app/Model/Masterdata';
import { MasterdataService } from 'src/app/Service/masterdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lstMasterData:Masterdata[]=[];
  public lstStateData:any[]=[];
  public lstCityData:any[]=[];
  constructor(public masterService:MasterdataService) { }

  ngOnInit() {
    this.masterService.getAllState().subscribe(data=>this.lstStateData=data);
    this.masterService.GetAllCity(1).subscribe(data=>this.lstCityData=data);
  }

  @Output() _SearchModelData = new EventEmitter<any>();

  serach(locInputVal,cityInputVal,stateInputVal){
    this._SearchModelData.emit({State: stateInputVal, City: cityInputVal, Loc: locInputVal});
  }

  stateChanged(stateid){
    this.masterService.GetAllCity(stateid).subscribe(data=>this.lstCityData=data);
  }
  

}
