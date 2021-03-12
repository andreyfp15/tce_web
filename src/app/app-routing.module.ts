import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmCategoryComponent } from './adm-category/adm-category.component';



const routes: Routes = [
  { path: '', component: AdmCategoryComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'admcategory', component: AdmCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
