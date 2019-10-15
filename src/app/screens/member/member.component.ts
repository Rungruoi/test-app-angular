import { Component, OnInit } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  member : any;
  constructor(
    private apiService : CallapiService,
  ) { }

  ngOnInit() {
    this.apiService.getMember().subscribe((data)=>{
      this.member = data;
      console.log(this.member);
    });
  }

}
