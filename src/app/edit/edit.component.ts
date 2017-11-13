import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
public movies: any =[];
public series: any=[];
  ngOnInit() {
   this.getMovies();
   this.getSeries();
  }
  addMovie(name, img, genre , description){
    console.log(name+"name  "+ img + " img"+ genre+ "Actdsjb"+ description);
    this.service.addMovies(name, img, genre, description).subscribe(res=>{
      console.log(JSON.parse(res.text()).success);
      if(JSON.parse(res.text()).success){
        console.log(res);
        alert("Movie added successfully");
        this.getMovies();
      }
      else
      alert("Movie already exists");
    });
  }

  addSeries(name, img, genre , description){
    console.log(name+"name  "+ img + " img"+ genre+ "Actdsjb"+ description);
    this.service.addSeries(name, img, genre, description).subscribe(res=>{
      console.log(JSON.parse(res.text()).success);
      if(JSON.parse(res.text()).success){
        console.log(res);
        alert("Series added successfully");
        this.getSeries();
      }
      else
      alert("Series already exists");
    });
  }

  deleteMovie(name){
    
    this.service.deleteMovie(name).subscribe(res=>{
      console.log(JSON.parse(res.text()).success);
      if(JSON.parse(res.text()).success){
      
        alert("Movie deleted successfully");
       this.getMovies();
      }
      else
      alert("Movie not deleted");
    })
   
  }
  getMovies(){
    this.service.getMovies().subscribe(res=> {this.movies=JSON.parse(res.text())});
  }
  getSeries(){
    this.service.getSeries().subscribe(res=> {this.series=JSON.parse(res.text())});
  }

  addSeason(Name, image, series, des){
    this.service.addSeason(Name, image, series, des).subscribe(res=>{
      console.log(JSON.parse(res.text()).success);
      if(JSON.parse(res.text()).success){
        console.log(res);
        alert("Season added successfully");
        
      }
      else
      alert("Season already exists");
    });
  }
}
