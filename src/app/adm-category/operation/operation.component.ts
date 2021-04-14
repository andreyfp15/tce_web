import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  formOperation : FormGroup;
  typeOperation : number;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    if (this.router.url === '/' || this.router.url === '/create'){
      this.typeOperation = 1;
    }
    else if (this.router.url.indexOf('details')){
      this.typeOperation = 2;
    }

    this.formOperation = this.formBuilder.group({
      name : [null, [Validators.required, Validators.maxLength(50)]],
      active : [{value: false, disabled: true}]
    });

  }

  editCategory(){
    this.typeOperation = 3;
    this.formOperation.controls['active'].enable();
  }

  onSubmit(){
    this.submitted = true;
    if(this.formOperation.valid){
      alert('d')
    }
    
  }

}
