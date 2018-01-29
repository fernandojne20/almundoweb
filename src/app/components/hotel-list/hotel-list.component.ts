import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hotel } from "../../services/hotel.service";


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit, OnChanges {

  @Input('list')
  hotels:Hotel[]; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("HOTEL", this.hotels);
    
  }

}
