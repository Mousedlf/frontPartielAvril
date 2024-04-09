export class Globals {
  public static baseUrl = "http://127.0.0.1:8000/api";
  public static token: string|null = localStorage.getItem("Token");

  public static isLoggedIn(){
    return localStorage.getItem("Token") != null
  }

}
