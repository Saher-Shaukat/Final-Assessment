import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
public movies : any=[];
  ngOnInit() {
    
  }
search(name){
  console.log("Inside search");// testing
  this.service.searchMovie(name).subscribe(res=> {console.log(res)
    this.movies=JSON.parse(res.text())
  });
}
}
