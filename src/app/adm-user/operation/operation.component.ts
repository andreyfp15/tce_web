import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppValidators } from '../../app.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  typeOperation : number;
  formOperation : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private modal : NgbModal, private router : Router) { }

  ngOnInit() {
    if (this.router.url === '/' || this.router.url === '/create'){
      this.typeOperation = 1;
      this.formOperation = this.formBuilder.group({
        email : [null, [Validators.email, Validators.required, Validators.maxLength(200)]],
        password : [null, [Validators.required, Validators.maxLength(50)]],
        passwordConfirm: [null, [Validators.required, Validators.maxLength(50)]],
        isAdmin : false,
        active : false
      }, { validator: AppValidators.ConfirmedValidator('password', 'passwordConfirm')});
    }
    else if (this.router.url.indexOf('details')){
      this.typeOperation = 2;
      this.formOperation = this.formBuilder.group({
        email : [{value: null, disabled: true}, [Validators.email, Validators.required, Validators.maxLength(200)]],
        isAdmin : {value: false, disabled: true},
        active : {value: false, disabled: true}
      });
    }
  }

  editUser(){
    this.typeOperation = 3;
    this.formOperation.controls['email'].enable();
    this.formOperation.controls['isAdmin'].enable();
    this.formOperation.controls['active'].enable();
  }

  openModalPassword(modalPassword: any) {
    this.modal.open(modalPassword, { size: 'md' });
  }

  onSubmit() {
    this.submitted = true;
    if(this.formOperation.valid){
      //this.router.navigateByUrl('home');
      alert('d')
    }
    
  }

}
