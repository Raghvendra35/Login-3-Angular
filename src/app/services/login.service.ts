import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  url="http://localhost:8080"
  constructor(private http: HttpClient) { }

//Calling to server to generate Token

generateToken(credential: any)
{ //It will generate token
 return this.http.post(`${this.url}/`, credential)
}








  //for login user we will get token and then set localStorage
  logginUser(token)
  {                     //key     value
    localStorage.setItem("token",token);
  }

  
  //it is used to check person is login or not
  //isLoggedIn()method  will check local storage has a token or not if have then return true 
   isLoggedIn()
   {
   let token=localStorage.getItem("token");
    
   if(token==undefined || token==='' || token==null)
   {
    //Person is not a login
     return false;
   }else
   {
    return true;
   }

  }


  //If we want to perform logout operation that mean we want to remove value/token from localStorga 
  logOut()
  {
    localStorage.removeItem('token');
    return true;
  }

  //Get the Token from LocalStorage

  getToken()
  {
    return localStorage.getItem("token");
  }

}









