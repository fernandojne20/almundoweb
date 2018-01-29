import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';



@Injectable()
export class HotelService {

    constructor(private http:HttpClient){

    }

    searchHotels(): Observable<Hotel[]>{

        // return this.http.get('https://jsonplaceholder.typicode.com/posts');
        return this.http.get<Hotel[]>('assets/data.json');
    }
}


 export class Hotel {

    constructor(
        private id:number,
        private name:string,
        private stars:number,
        private price:number,
        private image:string,
        private amenities:string[]){

    }
}