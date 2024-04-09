export class Globals {
  public static baseUrl = "";
  public static token: string|null = localStorage.getItem("Token");

  public static isLoggedIn(){
    return localStorage.getItem("Token") != null
  }

}
