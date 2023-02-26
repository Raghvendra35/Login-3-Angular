import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{

 constructor(private loginService:LoginService,
             private router: Router) {}




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
  //if Person is login then access other page/ how ? it'll check if this method will return true  
    if(this.loginService.isLoggedIn())
    {
      return true;
    } 
    //If person is not login and try to acces the dashboard then it'll redirect into login Page
    this.router.navigate(['login']); 
      return true;
  }
  
}
