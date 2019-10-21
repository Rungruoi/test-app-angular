import { Component, OnInit } from '@angular/core';
import { DetailprojectService } from './../../service/detailproject.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  detailProject:any;
  constructor(
    private detailService : DetailprojectService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    let Id = this.route.snapshot.params.id;
    this.detailService.detail(Id).subscribe((data=>{
      this.detailProject = data;
      console.log(data);
    }));
  }
}
