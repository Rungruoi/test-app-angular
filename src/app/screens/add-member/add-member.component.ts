import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberapiService } from './../../service/memberapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(
    private apiService: MemberapiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  member = new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(50)
    ]),
    'information': new FormControl('', [
      Validators.maxLength(300)
    ]),
    'phone': new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    'dob': new FormControl('', [
      Validators.required,
    ]),
    'avatar': new FormControl('', [
      Validators.required,
    ]),
    'position': new FormControl('', [
      Validators.required,
    ]),
    'gender': new FormControl('', [
      Validators.required,
    ])
  });

  ngOnInit() {
  }
  get name() {
    return this.member.get('name');  
  }
  get information() {
    return this.member.get('information');
  }
  get phone() {
    return this.member.get('phone');
  }
  get dob() {
    return this.member.get('dob');
  }
  get avatar() {
    return this.member.get('avatar');
  }
  get position() {
    return this.member.get('position');
  }
  get gender() {
    return this.member.get('gender');
  }

  saveMember(){
   
      this.apiService.addMember(this.member.value)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['/']);
        alert('SUCCESS !!');
      })
    
  }
}
