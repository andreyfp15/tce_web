import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmCategoryComponent } from './adm-category/adm-category.component';
import { AdmTextComponent } from './adm-text/adm-text.component';



const routes: Routes = [
  { path: '', component: AdmTextComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'admcategory', component: AdmCategoryComponent },
  { path : 'admtext', component: AdmTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
