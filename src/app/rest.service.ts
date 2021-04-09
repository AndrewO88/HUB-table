import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Schema} from './users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  // url = 'http://localhost:3000/Users';
  // getUsers(): Observable<Users[]> {
  //   return this.http.get<Users[]>(this.url);
  // }
  url = 'http://localhost:3000/Data';
  getScheme(): Observable<Schema> {
    return this.http.get<Schema>(this.url);
  }
  getTable(): Observable<Schema> {
    return this.http.get<Schema>(this.url);
  }
}
