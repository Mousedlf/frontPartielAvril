import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "./order";
import {Globals} from "./globals";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  getMyOrders(){
    return this.http.get<Order[]>(Globals.baseUrl+"/"+Globals.id+"/orders");
  }

  saveOrder()





}
