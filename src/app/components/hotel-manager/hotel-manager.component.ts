import { Component, OnInit } from '@angular/core';

import { HotelService, Hotel } from "../../services/hotel.service";
import { error } from 'selenium-webdriver';
import { Stars } from "../../interfaces/stars.interface";

@Component({
  selector: 'app-hotel-manager',
  templateUrl: './hotel-manager.component.html',
  styleUrls: ['./hotel-manager.component.css']
})
export class HotelManagerComponent implements OnInit {

  searchName:string;
  hotels:Hotel[] = new Array<Hotel>();
  stars:Stars;
  selectedStars:any[] = [];

  constructor(private _hotelService:HotelService) { 
    this.stars = {ALL: {checked: false, value: "ALL"},
      CINCO: {checked: false, value: 5},
      CUATRO: {checked: false, value: 4},
      TRES: {checked: false, value: 3},
      DOS: {checked: false, value: 2},
      UNO: {checked: false, value: 1}};
  }

  ngOnInit() {
    let obs = this._hotelService.searchHotels().subscribe(
      result => {
        this.hotels = result;
      },
      error => {
        console.log("ERROR OBTENIENDO EL ARRAY"); 
      }
    );
  }
  searchHotels(name:string){
    this.searchName = name;
    
    this._hotelService.searchHotels(this.getSearchFields()).subscribe(
      result => {
        this.hotels = result;
      },
      error => {
        console.log("ERROR OBTENIENDO EL ARRAY");
      }
    );
  }

  getStars(numberStars:number):number[]{
    return this._hotelService.getStars(numberStars);
  }

  //Allows to search hotels when user select a star
  starSelected(selected, star){
    this.validateAllOption(star);
    if(selected){
      this.selectedStars.push(star);
    }else{
      this.selectedStars.splice(this.selectedStars.indexOf(star), 1);
    }
    this.searchHotels(this.searchName);

  }

  //unify the search parameters
  private getSearchFields(){
    let fields:any = {};
    if (this.searchName && this.searchName != ""){
      fields.name = this.searchName;
    }
    if (this.selectedStars && this.selectedStars.length>0){
      let allIdx = this.selectedStars.indexOf("ALL");
      if(allIdx >= 0){
        this.selectedStars = this.getStars(5);
      }
      fields.stars = this.selectedStars;
    }
    return fields;
  }
  private validateAllOption(star){
    if (star == 'ALL' ){
     if (this.stars.ALL.checked){
       this.stars.CINCO.checked=false;
       this.stars.CUATRO.checked=false;
       this.stars.TRES.checked=false;
       this.stars.DOS.checked=false;
       this.stars.UNO.checked=false;
     }else{
      this.selectedStars = [];
     }
    }
  }

}

