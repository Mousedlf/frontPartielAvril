import {Component, inject} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../order";
import {NgForOf} from "@angular/common";
import {Globals} from "../globals";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  orderService = inject(OrderService);
  orders: Order[] = [];

  constructor() {
    this.getMyOrders()
  }

  getMyOrders(): void {
    this.orderService.getMyOrders().subscribe({
      next: (allOrders:any) => {
        this.orders = []
        for(let i= 0; i<allOrders.length; i++){
          let order:Order = {
            id: allOrders[i].id,
            byProfile: allOrders[i].byProfile,
            orderItems: allOrders[i].orderItems,
            createdAt: allOrders[i].createdAt,
            total: allOrders[i].total,
            paid: allOrders[i].paid,
          }
          this.orders.push(order)
        }
      }
    })
  }

  protected readonly Globals = Globals;
}
