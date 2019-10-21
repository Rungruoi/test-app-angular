import { Component, OnInit } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  
  constructor(
    private apiService: CallapiService,
    private route: Router
  ) { }
  today= new Date();

  form = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      information: new FormControl('', [
        Validators.maxLength(300)
      ]),
      deadline: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
        Validators.required

      ]),
      status: new FormControl('', [
        Validators.required
      ])
    });
  
  ngOnInit() { 
    console.log(this.today);
  }
  get name() {
    return this.form.get('name');  
  }
  get information() {
    return this.form.get('information');
  }
  get deadline() {
    return this.form.get('deadline');
  }
  get type() {
    return this.form.get('type');
  }
  get status() {
    return this.form.get('status');
  }

  save(){
    if(this.form.valid){

      this. apiService.addProject(this.form.value)
      .subscribe(data=>{
        console.log(data);
        this.form.value.name= ""
        this.form.value.information= ""
        this.form.value.deadline= ""
        this.form.value.type= ""
        this.form.value.status= ""
        this.route.navigate(['/']);
        alert('SUCCESS !!');
      })
    }
  }
}
