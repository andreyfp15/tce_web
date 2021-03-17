import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmCategoryComponent } from './adm-category/adm-category.component';
import { AdmTextComponent } from './adm-text/adm-text.component';
import { AdmUserComponent } from './adm-user/adm-user.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component'


const routes: Routes = [
  { path: '', component: CategoryComponent },
  //{ path: 'login', component: LoginComponent },
  { path : 'admcategory', component: AdmCategoryComponent },
  { path : 'admtext', component: AdmTextComponent },
  { path : 'admuser', component : AdmUserComponent },
  { path : 'home', component : HomeComponent },
  { path : 'category', component : CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
