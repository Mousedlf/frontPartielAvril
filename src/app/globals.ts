export class Globals {
  public static baseUrl = "https://qrcode.dlfcaroline.online/api"; //http://127.0.0.1:8000/
  public static token: string|null = localStorage.getItem("Token");
  public static username: string|null = localStorage.getItem("CurrentUserUsername");
  public static id: string|null = localStorage.getItem("CurrentUserId");


  public static isLoggedIn(){
    return localStorage.getItem("Token") != null
  }

}
