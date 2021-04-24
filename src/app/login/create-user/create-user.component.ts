import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '../../app.validators';
import { Helper } from '../../app.helper';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formOperation : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formOperation = this.formBuilder.group({
      email : [null, [Validators.email, Validators.required, Validators.maxLength(100)]],
      password : [null, [Validators.required, Validators.maxLength(20)]],
      passwordConfirm: [null, [Validators.required, Validators.maxLength(20)]],
    }, { validator: AppValidators.ConfirmedValidator('password', 'passwordConfirm')});
  }

  onSubmit() {

    this.submitted = true;
    if(this.formOperation.valid){
      Helper.showLoader();
      Helper.hideLoader();
      //this.router.navigateByUrl('home');
      alert('d');

    }
    
  }

}
