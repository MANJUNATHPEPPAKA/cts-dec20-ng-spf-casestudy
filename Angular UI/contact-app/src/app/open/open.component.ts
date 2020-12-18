import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent{
  constructor(private _router:Router){}
handle(id:number)
{
  if(id==3)
  {
    
    this._router.navigate(["register"]);


  }
  else if(id==6){

    this._router.navigate(["login"]);
  }
}
 

}
