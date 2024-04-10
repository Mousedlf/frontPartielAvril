import {Component, inject} from '@angular/core';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {OrderService} from "../order.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-webcam',
  standalone: true,
  imports: [
    ZXingScannerModule,
    NgxScannerQrcodeModule,
    NgIf,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent {

  //scannedProductId !: string
  orderService = inject(OrderService);
  cartService = inject(CartService);



  matchToProduct(value: any){
//  const scannedProductId = value[0].value


    // @ts-ignore
    const cartItemIds = JSON.parse(sessionStorage.getItem('cartItemIds'));


   if(cartItemIds != null){

     const truc = value[0].value

     cartItemIds.push(truc);
     const ids = cartItemIds
     console.log(ids)

     sessionStorage.setItem('cartItemIds', JSON.stringify(ids));
   } else {

 // bricolage, pas regarder de près
    const scannedId = value[0].value
     const truc = '['+'"'+scannedId+'"'+']';

     console.log(truc);

    sessionStorage.setItem('cartItemIds', truc);

   }


  }




}
