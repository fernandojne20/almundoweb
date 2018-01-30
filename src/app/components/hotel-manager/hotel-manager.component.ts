import { Component, OnInit } from '@angular/core';

import { HotelService, Hotel } from "../../services/hotel.service";
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-hotel-manager',
  templateUrl: './hotel-manager.component.html',
  styleUrls: ['./hotel-manager.component.css']
})
export class HotelManagerComponent implements OnInit {

  saveUsername = false;
  hotels:Hotel[] = new Array<Hotel>();
  stars:{};

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
    console.log(name);
    let hotel = new Hotel(249942,"Hotel Stefanos",3,994.18, "4900059_30_b.jpg", [
      "safety-box",
      "nightclub",
      "deep-soaking-bathtub",
      "beach",
      "business-center"
    ]);
    this.hotels = [hotel];
    // this._hotelService.searchHotels(name).subscribe(
    //   result => {
    //     this.hotels = result;
    //   },
    //   error => {
    //     console.log("ERROR OBTENIENDO EL ARRAY"); 
    //   }
    // );
  }

  getStars(numberStars:number):number[]{
    return this._hotelService.getStars(numberStars);
  }

  starSelected(){
    this.stars.ALL.checked = !this.stars.ALL.checked;
    console.log(this.stars);

  }

}
