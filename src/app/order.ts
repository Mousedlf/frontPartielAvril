import {Profile} from "./profile";
import {OrderItem} from "./order-item";

export interface Order {
  id:number
  byProfile : Profile
  orderItems : OrderItem[]
  createdAt : Date
  total: number
  paid: boolean
}
