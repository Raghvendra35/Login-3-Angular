import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  
  credentials={
         
      username:"",
      password:""
  }

  constructor(private loginService:LoginService){}

  ngOnInit()
  {

  }

  onSubmit()
  {
    console.log("Done.....");
    if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null))
    {
      alert("Login.....");
      //Generate Token
      this.loginService.generateToken(this.credentials).subscribe((response: any)=>
        {
          //Success generate Token
        console.log(response);
        //here we are getting token
        console.log(response.token);
        //Now token has come in localStorage

        //Here we are send token 
        this.loginService.logginUser(response.token);
         
        //here we are redirect to dashboard
        window.location.href="/dashboard"
  
             
        },error=>
        {
       console.log(error);

        })
    }else{
      alert(" Fields are Empty!!!")
    }
    
  }

}






