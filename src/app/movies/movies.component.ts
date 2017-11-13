import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
   public Drama: any =[];
   public Horror: any =[];
   public Action: any =[];
   public Comedy: any =[];
   public Other: any =[];
  ngOnInit() {
    this.service.getMoviesByGenre("Drama").subscribe(res=>{this.Drama=JSON.parse(res.text()); console.log(this.Drama)});
    this.service.getMoviesByGenre("Horror").subscribe(res=>{this.Horror=JSON.parse(res.text()); console.log(this.Horror)});
    this.service.getMoviesByGenre("Action").subscribe(res=>{this.Action=JSON.parse(res.text()); console.log(this.Action)});
    this.service.getMoviesByGenre("Other").subscribe(res=>{this.Other=JSON.parse(res.text()); console.log(this.Other)});
    this.service.getMoviesByGenre("Comedy").subscribe(res=>{this.Comedy=JSON.parse(res.text()); console.log(this.Comedy)});
  }

}
