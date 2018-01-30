import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hotel, HotelService } from "../../services/hotel.service";


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit, OnChanges {

  @Input('list')
  hotels:Hotel[]; 

  constructor( private _hotelService:HotelService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("HOTEL", this.hotels);
    
  }

  getStars(numberStars:number):number[]{
    return this._hotelService.getStars(numberStars);
  }

}
