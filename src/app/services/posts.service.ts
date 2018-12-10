import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  add(post: Post): Observable<Post> {
    const url: string = this.baseUrl + 'posts';
    return this.httpClient.post<Post>(url, post, httpOptions);
  }

  update(post: Post): Observable<Post> {
    const url: string = this.baseUrl + 'posts/' + post.id;
    return this.httpClient.put<Post>(url, post, httpOptions);
  }

  delete(post: Post): Observable<Post> {
    const url: string = this.baseUrl + 'posts/' + post.id;
    return this.httpClient.delete<Post>(url, httpOptions);
  }

  getAll(): Observable<Post[]> {
    const url: string = this.baseUrl + 'posts';
    return this.httpClient.get<Post[]>(url);
  }
}
