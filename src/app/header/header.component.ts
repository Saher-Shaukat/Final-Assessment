import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import { AuthService } from "angular4-social-login";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }
  onSignout(){
    this.service.isLoggedIn=false;
    this.service.email="";
    this.router.navigate(['/Home']);
    if(this.service.socialuser){
      this.service.socialuser=false;
      this.authService.signOut();
  }
}

}
