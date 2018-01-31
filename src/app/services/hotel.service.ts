import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';



@Injectable()
export class HotelService {

  constructor(private http: HttpClient) {

  }

  searchHotels(parameters: any = undefined): Observable<Hotel[]> {

    if (parameters) {
      return this.http.get<Hotel[]>('http://almundoapi.herokuapp.com/hotels', {params: parameters});
    } else {
      return this.http.get<Hotel[]>('http://almundoapi.herokuapp.com/hotels');
    }
  }

  getStars(numberStars: number): number[] {
    if (numberStars) {
      return Array.from(Array(numberStars), (e, i) => i + 1);
    } else {
      return [];
    }
  }
}


export class Hotel {

  constructor(
    private id: number,
    private name: string,
    private stars: number,
    private price: number,
    private image: string,
    private amenities: string[]) {

  }
}