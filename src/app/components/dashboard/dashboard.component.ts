import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
   user:any

  constructor(private userService: UserService) {}

  ngOnInit(): void 
  {
   this.userService.getUser().subscribe(data=>
    {
      console.log(data);
      this.user=data;
      
    },error=>
    {
      alert("Failed");
    })
  }

}
