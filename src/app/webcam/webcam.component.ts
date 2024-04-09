import {Component, inject} from '@angular/core';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {NgxScannerQrcodeModule} from "ngx-scanner-qrcode";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {OrderService} from "../order.service";

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

  scannedProductId !: string
  orderService = inject(OrderService);


  matchToProduct(value: any){
    this.scannedProductId = value[0].value

    this.orderService.saveProductToCart(this.scannedProductId, 1).subscribe({
      next: (result) => {
        console.log(result)
      }
    })
  }

  saveProductToCart(id:any){


  }





}
