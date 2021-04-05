import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  formLogin: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.formLogin.valid){
      this.router.navigateByUrl('home');
    }
  }


}
