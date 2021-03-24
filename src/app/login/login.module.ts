import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'create', component: CreateUserComponent },

];

@NgModule({
  declarations: [IndexComponent, CreateUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }
