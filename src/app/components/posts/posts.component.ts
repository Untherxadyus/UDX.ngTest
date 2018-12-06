import { Post } from './../../models/Post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
}
