import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
  public Drama: any =[];
  public Horror: any =[];
  public Action: any =[];
  public Comedy: any =[];
  public Other: any =[];

  ngOnInit() {
    this.service.getSeriesByGenre("Drama").subscribe(res=>{this.Drama=JSON.parse(res.text()); console.log(this.Drama)});
    this.service.getSeriesByGenre("Horror").subscribe(res=>{this.Horror=JSON.parse(res.text()); console.log(this.Horror)});
    this.service.getSeriesByGenre("Action").subscribe(res=>{this.Action=JSON.parse(res.text()); console.log(this.Action)});
    this.service.getSeriesByGenre("Other").subscribe(res=>{this.Other=JSON.parse(res.text()); console.log(this.Other)});
    this.service.getSeriesByGenre("Comedy").subscribe(res=>{this.Comedy=JSON.parse(res.text()); console.log(this.Comedy)});
  }

}
