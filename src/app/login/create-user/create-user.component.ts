import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '../../app.validators';
import { Helper } from '../../app.helper';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formOperation : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private service : LoginService, private router : Router, private toast: ToastrService) { }

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
      this.service.createUser(this.formOperation.value).subscribe(data => {
        this.toast.success('Usuário cadastrado com sucesso.', 'Sucesso!');
        this.router.navigateByUrl('/');
        Helper.hideLoader();
      }, error => {
        Helper.hideLoader();
        this.toast.error('Erro ao salvar usuário. ' + error.message, 'Erro!');
      });
    }
    
  }

}
