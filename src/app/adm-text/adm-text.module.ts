import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { OperationComponent } from './operation/operation.component';

const routes: Routes = [
  { path: '', component: OperationComponent },
  { path: 'index', component: IndexComponent },
  { path: 'create', component: OperationComponent },
  { path: 'details/:id', component: OperationComponent },
]

@NgModule({
  declarations: [IndexComponent, OperationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdmTextModule { }
