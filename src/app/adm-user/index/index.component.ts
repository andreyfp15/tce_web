import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  formFilter : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formFilter = this.formBuilder.group({id : null, email : null, isAdmin : "", active: ""});
  }

  onSubmit(){
    alert('df')
  }

}
