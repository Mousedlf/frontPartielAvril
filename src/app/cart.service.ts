import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "./globals";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(){
    return this.http.get(Globals.baseUrl+"/cart")
  }

}
