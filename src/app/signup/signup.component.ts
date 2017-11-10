import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }
  onSubmit(username, email,password, checkPassword){
    
    if(password == checkPassword)
    {
      this.service.onSignup(email, username, password).subscribe(res=> {
        console.log(res);
        if(JSON.parse(res.text()).success){
          alert("Successfully logged in");
        }
        else{
          alert("User Already exists");
        }
      } );
    }
    else{
      alert("Confirm password again");
    }
   
  }
  
}


