import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component'


const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path : 'admcategory', loadChildren: () => import('./adm-category/adm-category.module').then(m => m.AdmCategoryModule) },
  { path : 'admtext', loadChildren: () => import('./adm-text/adm-text.module').then(m => m.AdmTextModule) },
  { path : 'admuser',loadChildren: () => import('./adm-user/adm-user.module').then(m => m.AdmUserModule)  },
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
