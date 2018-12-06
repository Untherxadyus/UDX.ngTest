import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);
  }
}
