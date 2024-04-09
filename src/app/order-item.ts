import {Product} from "./product";
import {Order} from "./order";

export interface OrderItem {
  id: number
  product: Product
  ofOrder: Order
  quantity: number
}
