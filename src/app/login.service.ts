import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Globals} from "./globals"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient)
  private router = inject(Router)


  register(object:any){
    this.http.post<any>("https://qrcode.dlfcaroline.online/register",object).subscribe({
      next: (response: Response) => {
        console.log(response)
      }
    })
    this.router.navigate(['login'])

  }


  login(object: any) {
    this.http.post<any>(Globals.baseUrl+"/login_check", object).subscribe({
      next:(response:any)=>{
        localStorage.setItem("Token", response["token"])
        //console.log(response["token"])
        console.log(response)
      }})
    this.router.navigate(['home'])
  }


  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(["login"])
  }


}
