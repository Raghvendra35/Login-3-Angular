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
      this.loginService.generateToken(this.credentials).subscribe(respone=>
        {
          
        })
    }else{
      alert(" Fields are Empty!!!")
    }
    
  }

}
