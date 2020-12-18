import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {Routes,RouterModule} from '@angular/router';
import { OpenComponent } from './open/open.component';
import{UserserviceService} from './userservice.service';
import { HttpClientModule} from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
let routes:Routes=[
  {path:"",component:RegisterComponent},
{path:"open",component:OpenComponent},
{path:"open/register",component:RegisterComponent},
{path:"open/login",component:LoginComponent},
{path:"open/login/register",component:RegisterComponent},
{path:"open/register/login",component:LoginComponent},




{path:"success/:Id",component:SuccessComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OpenComponent,
    SuccessComponent,

    

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
