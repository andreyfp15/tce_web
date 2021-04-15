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

    this.formOperation = this.formBuilder.group({
      name : [null, [Validators.required, Validators.maxLength(50)]],
      level : [{value: "", disabled: true}, [Validators.required]],
      idCategory : [{value: "", disabled: true}, [Validators.required]],
      active : [{value: false, disabled: true}],
      file : [{value: "", disabled: true}],
    });

    if (this.router.url === '/' || this.router.url === '/create'){
      this.typeOperation = 1;
      this.formOperation.controls['level'].enable();
      this.formOperation.controls['idCategory'].enable();
      this.formOperation.controls['active'].enable();
      this.formOperation.controls['file'].enable();
    }
    else if (this.router.url.indexOf('details')){
      this.typeOperation = 2;
    }

  }

  editCategory(){
    this.typeOperation = 3;
    this.formOperation.controls['level'].enable();
    this.formOperation.controls['idCategory'].enable();
    this.formOperation.controls['active'].enable();
    this.formOperation.controls['file'].enable();
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.formOperation.patchValue({
          file: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        //this.cd.markForCheck();
      };
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.formOperation.valid){
      alert('d')
    }
    
  }

}
