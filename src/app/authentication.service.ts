import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class AuthenticationService {
  public email="";
  public isAdmin=false;
  public isLoggedIn=false;
  public socialuser= false;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
  this.options = new RequestOptions({ headers: this.headers });
   }
  onSignup(email, name , password){
    return this.http.post("http://localhost:3000/createUser",{email: email, password: password, name: name},this.options);
  }
  onLogin(email, password){
    return this.http.get("http://localhost:3000/getUser/"+email+"/"+ password);
  }

  getMoviesByGenre(genre: String){
    return this.http.get("http://localhost:3000/getMoviesByGenre/"+genre);
  }

  getSeriesByGenre(genre: String){
    return this.http.get("http://localhost:3000/getSeriesByGenre/"+genre);
  }
  getSeries(){
    return this.http.get("http://localhost:3000/getSeries");
  }

  getMovies(){
    return this.http.get("http://localhost:3000/getMovies");
  }
  addMovies(name, image , genre, des){
    return this.http.post("http://localhost:3000/addMovie",{name: name, img_url: image, genre: genre, description: des},this.options);
  }

  addSeries(name, image , genre, des){
    return this.http.post("http://localhost:3000/addSeries",{name: name, img_url: image, genre: genre, description: des},this.options);
  }

  addSeason(name, image , series, des){
    return this.http.post("http://localhost:3000/addSeason",{name: name, img_url: image, series: series, description: des},this.options);
  }
deleteMovie(name: String){
    console.log(name);
    return this.http.delete("http://localhost:3000/deleteMovie/"+ name);
  }
searchMovie(name){
  return this.http.get("http://localhost:3000/searchMovie/"+ name);
}
}
