import { Component, OnInit } from '@angular/core';

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
    }else{
      alert(" Fields are Empty!!!")
    }
    
  }

}
