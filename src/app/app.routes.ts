import { Routes } from '@angular/router';
import {FormLoginComponent} from "./auth/form-login/form-login.component";
import {HomeComponent} from "./home/home.component";
import {FormRegisterComponent} from "./auth/form-register/form-register.component";

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
];
