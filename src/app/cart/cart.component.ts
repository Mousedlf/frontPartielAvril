import {Component, inject} from '@angular/core';
import {Globals} from "../globals";
import {Router, RouterLink} from "@angular/router";
import {CartService} from "../cart.service";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    protected readonly Globals = Globals;
    cartService = inject(CartService);
    productService = inject(ProductService);
    productsInCart: Product[] = []

  constructor() {
      this.displayCart()
    }

   displayCart(){

     // @ts-ignore
     const storedCartItemIds = JSON.parse(sessionStorage.getItem('cartItemIds'));

     if(storedCartItemIds != null){

       storedCartItemIds.forEach((id :number)=> {
         this.productService.getProductById(id).subscribe({
           next: (response: any) => {
             this.productsInCart.push(response)
           }
         })
       })

     }

     console.log(this.productsInCart)
   }



   removeItem(id:number){

     console.log(this.productsInCart)

     const index = this.productsInCart.findIndex(item => item.id === id)
     this.productsInCart.splice(index, 1);
     console.log(this.productsInCart)

     const array:any =[]

     this.productsInCart.forEach(item => {
       array.push(item.id)
     })

     console.log(array)

     // Recreer array et push dans session??
     sessionStorage.setItem('cartItemIds', JSON.stringify(array))
   }


   // A FAIRE.
   getTotal(){

     // @ts-ignore
     const storedCartItemIds = JSON.parse(sessionStorage.getItem('cartItemIds'));

     storedCartItemIds.forEach((id :number)=> {
       this.productService.getProductById(id).subscribe({
         next: (response: any) => {
           console.log(response.price)


         }})
     })
   }

  protected readonly sessionStorage = sessionStorage;
}
