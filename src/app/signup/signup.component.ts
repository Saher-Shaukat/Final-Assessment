import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthenticationService, private router : Router, private authService: AuthService ) { }

  ngOnInit() {
  }
  private user: SocialUser;
  private loggedIn: boolean;
  sub;
  onSubmit(username, email,password, checkPassword){
    
    if(password == checkPassword)
    {
      this.service.onSignup(email, username, password).subscribe(res=> {
        console.log(res);
        if(JSON.parse(res.text()).success){
          alert("Successfully logged in");
          this.router.navigate(['Login']);
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

  signInWithGoogle(): void {
    let name;
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
       this.sub=this.authService.authState.subscribe((user) => {
        this.user = user;
        if(this.user!=null){
          this.router.navigate(['/Home']);
          this.service.email=user.email;
          this.service.isLoggedIn=true;
          this.service.isAdmin=false;
          this.service.socialuser=true;
          this.service.onSignup(user.email, user.name, "abcd").subscribe(res=>{console.log(res.text())});
        }
       
        this.loggedIn = (user != null);
      });
  }
  signOut(): void {
    this.authService.signOut();
  }
  signInWithFB(): void {
    let name;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    //  console.log(res);
    this.sub=this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("Fb user"+ this.user);
      if(this.user!=null){
        this.router.navigate(['/Home']);
        this.service.email=user.email;
        this.service.isLoggedIn=true;
        this.service.isAdmin=false;
        this.service.socialuser=true;
        this.service.onSignup(user.email, user.name, "abcd").subscribe(res=>{console.log(res.text())});
      }
      this.loggedIn = (user != null);
    });
    
  }
  ngOnDestroy(){
    if(this.service.socialuser)
    this.sub.unsubscribe();
    
  }
  
}


