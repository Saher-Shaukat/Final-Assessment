import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }
  authenticate(username, password){
   
    this.service.onLogin(username, password).subscribe(res=>{
      console.log(res);
      var user=JSON.parse(res.text()).body;
      if(JSON.parse(res.text()).success){
        this.service.email=user.email;
        this.service.isLoggedIn=true;
        this.service.isAdmin=user.admin;
        console.log(this.service.isAdmin);
      }
    });
  }

}
