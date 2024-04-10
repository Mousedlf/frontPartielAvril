import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Globals} from "./globals";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)
  private router = inject(Router)


  getProductById(id:number){
    return this.http.get(Globals.baseUrl+"/product/"+id)
  }

}
