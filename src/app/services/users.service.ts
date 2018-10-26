import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  add(user: User) {
    const url: string = this.baseUrl + 'users';
    this.httpClient.post(url, user);
  }
  delete(id: number) {
    const url: string = this.baseUrl + 'users/' + id;
    this.httpClient.delete(url);
  }
  update(user: User) {
    const url: string = this.baseUrl + 'users/' + user.id;
    this.httpClient.put(url, user);
  }

  get(id: number) {
    const url: string = this.baseUrl + 'users/' + id;
    return this.httpClient.get<User>(url);
  }

  getAll(): Observable<User[]> {
    const url: string = this.baseUrl + 'users';
    return this.httpClient.get<User[]>(url);
  }
}
