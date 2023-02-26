import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

constructor(private loginService: LoginService){}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
{
        throw new Error("Method not implemented.");
 //Which request is comming and here we are adding in header
 
 let newReq=req;
//here we are getting token
let token=this.loginService.getToken();

console.log("Interceptor",token);

if(token!=null)
{
  //here we are getting modified request (Adding token in header)  
 newReq=newReq.clone({setHeaders:{Authorization:`Bearer $ {token}`}})
}

return next.handle(newReq)
//next we will add add inside app.module 
}
    
}











