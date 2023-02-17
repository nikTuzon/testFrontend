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

  getValue(): Observable<any>{
    return this.http.get<any>('http://localhost:3030');
  }
}
