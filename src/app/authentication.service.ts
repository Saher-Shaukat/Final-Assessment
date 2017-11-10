import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class AuthenticationService {
  public email="";
  public isAdmin=false;
  public isLoggedIn=false;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
  this.options = new RequestOptions({ headers: this.headers });
   }
  onSignup(email, name , password){
    return this.http.post("http://localhost:3000/v1/createUser",{email: email, password: password, name: name},this.options);
  }
  onLogin(email, password){
    return this.http.get("http://localhost:3000/v1/getUser/"+email+"/"+ password);
  }
}
