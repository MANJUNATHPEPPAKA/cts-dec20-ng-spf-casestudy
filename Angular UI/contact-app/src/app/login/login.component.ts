import { Component, OnInit } from '@angular/core';
import{UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
id:number=undefined;
password:string=undefined;
constructor(private _service:UserserviceService,private _router:Router){}
handleLogin(loginValues:any)
{

   /*
  let loggedIn=this._service.login(loginValues.id,loginValues.password);
  if(loggedIn){

    this._router.navigate(["success",loginValues.id]);

  }else{
    this._router.navigate(["register"]);
  }

  */

  
  this._service.authenticate(loginValues.id,loginValues.password)
  .subscribe(response=>{
    console.log(response);
  if(response.profileid==loginValues.id)
{
  this._router.navigate(["success",loginValues.id]);

}
else if(response.profileid==null) 
{
  this._router.navigate(["open/login/register"]);
}

});
}
  





}