import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  productService = inject(ProductService);
  productsInCart: Product[] = []



  validateOrder() {
    // @ts-ignore
    const storedCartItemIds = JSON.parse(sessionStorage.getItem('cartItemIds'));

    if (storedCartItemIds != null) {


      storedCartItemIds.forEach((id: number) => {
        this.productService.getProductById(id).subscribe({
          next: (response: any) => {
            this.productsInCart.push(response)
          }
        })
      })

      this.productsInCart.forEach()

      console.log(this.productsInCart)


    }

  }






}
