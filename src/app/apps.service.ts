import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(
    private http: HttpClient
  ) { }
  
  // function for getting the data on the API endpoint observable for any return values
  getValue(): Observable<any>{
    return this.http.get<any>('http://localhost:3030');
  }
}
