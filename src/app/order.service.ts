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

  matchQrcodeToProduct(name: string){
    return this.http.get<Product[]>(Globals.baseUrl+"/findby/qrcode/"+name);
  }

  saveProductToCart(id:any, quantity:number){
    return this.http.get<Product[]>(Globals.baseUrl+"/cart/add/"+id+"/"+quantity);
  }

}
