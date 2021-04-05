import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdmCategoryComponent } from './adm-category/adm-category.component';
import { AdmTextComponent } from './adm-text/adm-text.component';
import { AdmUserComponent } from './adm-user/adm-user.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { TextModule } from './text/text.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    AdmCategoryComponent,
    AdmTextComponent,
    AdmUserComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    TextModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
