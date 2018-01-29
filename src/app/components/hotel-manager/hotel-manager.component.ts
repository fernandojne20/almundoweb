import { Component, OnInit } from '@angular/core';

import { HotelService, Hotel } from "../../services/hotel.service";
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-hotel-manager',
  templateUrl: './hotel-manager.component.html',
  styleUrls: ['./hotel-manager.component.css']
})
export class HotelManagerComponent implements OnInit {

  constructor(private _hotelService:HotelService) { }

  hotels:Hotel[] = new Array<Hotel>();
  ngOnInit() {
    let obs = this._hotelService.searchHotels().subscribe(
      result => {
        this.hotels = result;
      }
    );
  }

}
