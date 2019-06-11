import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { 
    this.getUserDetails().subscribe(data => {
        console.log(data);
    });
  }



  //get json Data
  public getUserDetails(): Observable<any> {
    return this._http.get(`../../assets/users.json`);
  }
}
