import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{

  public loggedIn=false; //it means user not login //if it is true then user is login 

  constructor(private loginService: LoginService){}
  ngOnInit(): void 
  {
    this.loggedIn=this.loginService.isLoggedIn(); //it'll return true or false
  }

  logoutUser()
  {
    this.loginService.logOut();
    //when user click on logout button then token will remove from local Storage
  
    //it'll redirect on login page after click on logout button
    location.reload();
  }

}
