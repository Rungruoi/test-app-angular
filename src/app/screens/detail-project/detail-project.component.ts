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

  Id:any;
  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.detailService.detail(this.Id).subscribe((data=>{
      this.detailProject = data;
      console.log(data);
    }));
  }

  remove(detail){
    if(confirm("Bạn có muốn xóa thành viên này trong dự án?")){
      this.detailService.removeMember(this.Id,detail.member_id)
      .subscribe((data) => {
        this.detailProject = this.detailProject.filter(
          (item) => item.id != detail.id
          )
      });
    }
  }
}
