import { Component, OnInit } from '@angular/core';

import{ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit  {
id:number=undefined;
constructor(private _activatedRoute:ActivatedRoute){}
ngOnInit():void{
  this._activatedRoute.params.subscribe((key:Params)=>this.id=key.Id);
}

}
