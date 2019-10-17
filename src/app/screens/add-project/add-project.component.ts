import { Component, OnInit } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(
    private apiService : CallapiService,
    private route : Router

  ) { }

  model = new FormGroup(
    {
      name : new FormControl('',[
       Validators.required,
       Validators.minLength(4)
       ]),
      information : new FormControl('',[
        Validators.required
        ])
    });

  ngOnInit() {
  }
  get name(){ return this.model.get('name');}
  get information(){ return this.model.get('information');}

}
