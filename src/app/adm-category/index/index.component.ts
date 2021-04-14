import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  formFilter : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.formFilter = this.formBuilder.group({ id : null, name : null, active : ""});

  }

  onSubmit(){
    alert('sd')
  }

}
