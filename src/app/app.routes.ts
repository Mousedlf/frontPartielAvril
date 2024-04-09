import { Routes } from '@angular/router';
import {FormLoginComponent} from "./auth/form-login/form-login.component";
import {HomeComponent} from "./home/home.component";

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
    path:'home',
    component: HomeComponent,
  },
];
