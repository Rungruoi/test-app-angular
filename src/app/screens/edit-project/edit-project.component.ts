import { Component, OnInit } from '@angular/core';
import { CallapiService } from './../../service/callapi.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Validators ,FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(
    private apiService : CallapiService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  form = new FormGroup(
    {
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      information: new FormControl('', [
        Validators.required,
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
    let Id = this.route.snapshot.params.id;
    this.apiService.getProject(Id)
    .subscribe(data => {
      console.log(data);
      this.form.setValue({
        id: data.id,
        name: data.name,
        information: data.information,
        deadline: data.deadline,
        type: data.type,
        status: data.status
      })
    });
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

  saveEdit(){
    confirm('Bạn có muốn sửa');
    console.log(this.form.value);
      this.apiService.editProject(this.form.value.id,this.form.value)
      .subscribe(data => {
      this.router.navigate(['/']);
      })
  }
}
