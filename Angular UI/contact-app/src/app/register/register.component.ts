import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
profileid:number=undefined;
username:string=undefined;



password:string=undefined;
dob:Date=undefined;


mes:string="hooooo";
  constructor(private _service:UserserviceService,private _router:Router) { }

  
handle(registerValues:any){

  console.log(registerValues.profileid);  
  console.log(registerValues.username);
  console.log(registerValues.password);
  console.log(registerValues.dob);


  this._service.put(registerValues).subscribe(Response=>console.log(Response));
  console.log(this.mes);


if(this.mes=="hooooo")
{
  this._router.navigate(["open/register/login"]);

}
}


}