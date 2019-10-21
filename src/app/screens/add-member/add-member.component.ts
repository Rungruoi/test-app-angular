import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';
import {Router, ActivatedRoute } from '@angular/router';
import {Validators ,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(
    private CallapiService : CallapiService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  model = new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
      ]),
    'image': new FormControl('', [
      Validators.required,
      ]),
    'price':new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]{2,6}')

      ]),
    'detail':new FormControl('',[
      Validators.required,
      Validators.minLength(10)
      ])
  });

  ngOnInit() {
  }

}
