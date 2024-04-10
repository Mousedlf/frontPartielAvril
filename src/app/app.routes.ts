import { Routes } from '@angular/router';
import {FormLoginComponent} from "./auth/form-login/form-login.component";
import {HomeComponent} from "./home/home.component";
import {FormRegisterComponent} from "./auth/form-register/form-register.component";
import {OrdersComponent} from "./orders/orders.component";
import {CartComponent} from "./cart/cart.component";
import {WebcamComponent} from "./webcam/webcam.component";
import {PaymentComponent} from "./payment/payment.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo:"/login",
    pathMatch: "full"
  },
  {
    path:'login',
    component: FormLoginComponent,
  },
  {
    path:'register',
    component: FormRegisterComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'orders',
    component: OrdersComponent,
  },
  {
    path:'cart',
    component: CartComponent,
  },
  {
    path:'scanner',
    component: WebcamComponent,
  },
  {
    path:'payment',
    component: PaymentComponent,
  },
];
