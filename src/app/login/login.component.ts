import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  authenticate(username, password){
   
    this.service.onLogin(username, password).subscribe(res=>{
      console.log(res);
      var user=JSON.parse(res.text()).body;
      if(JSON.parse(res.text()).success){
        this.router.navigate(['/Home']);
        this.service.email=user.email;
        this.service.isLoggedIn=true;
        this.service.isAdmin=user.admin;
        console.log(this.service.isAdmin);
      }
    });
  }

}
