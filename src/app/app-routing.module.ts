import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmCategoryComponent } from './adm-category/adm-category.component';
import { AdmTextComponent } from './adm-text/adm-text.component';
import { AdmUserComponent } from './adm-user/adm-user.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component'


const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  //{ path: '', component: CategoryComponent },
  //{ path: 'login', component: LoginComponent },
  { path : 'admcategory', component: AdmCategoryComponent },
  { path : 'admtext', component: AdmTextComponent },
  { path : 'admuser', component : AdmUserComponent },
  { path : 'home', component : HomeComponent },
  { path : 'category', component : CategoryComponent },
  { path : 'text', loadChildren: () => import('./text/text.module').then(m => m.TextModule) },
  { path : 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
