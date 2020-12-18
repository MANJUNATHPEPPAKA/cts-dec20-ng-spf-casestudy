import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users:any=[];
  constructor(private _http:HttpClient){}

  authenticate(profileid:number,password:string):Observable<any>{



    let uri=`http://localhost:9090/login/${profileid}/${password}`;
    return this._http.post(uri,{});
  }
  put(registerValues:any):Observable<any>{
    let uri='http://localhost:9090';   
     console.log("cdecdecde");


    console.log(registerValues.profileid);  
    console.log(registerValues.username);
    console.log(registerValues.password);
    console.log(registerValues.dob);

    return this._http.post(uri,registerValues)
  }
  /*
  login(id:number,password:string):boolean{





    
    if((id==1000||id==3000)&&password=="angular")
    {
      return true;

    }
    else{
      return false;
    }
  }
*/
}
