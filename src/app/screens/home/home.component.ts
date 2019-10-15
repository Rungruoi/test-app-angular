import { Component, OnInit } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalProject:any;
  constructor(
    private apiService : CallapiService,
  ) { }
  
  ngOnInit() {
    this.apiService.get().subscribe((data)=>{
      this.totalProject = data;
      console.log(this.totalProject);
    });
  }
 
  
  
 
}
