import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Schema} from './users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000';

  getScheme(): Observable<Schema> {
    return this.http.get<Schema>(this.url + '/Data');
  }

  getTable(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get<Schema>(url);
  }
}
