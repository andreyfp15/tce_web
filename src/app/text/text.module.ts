import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { UiSwitchModule } from 'ngx-toggle-switch';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiSwitchModule
  ]
})
export class TextModule { }
