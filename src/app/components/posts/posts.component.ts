import { Post } from './../../models/Post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = { id: 0, title: '', body: '' };
  isEdit: Boolean = false;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(posts => {
      if (posts) {
        console.log(posts);
        this.posts = posts.reverse();
      }
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  deletePost(post: Post) {
    console.log(post);
    this.postService.delete(post.id).subscribe(() => {
      this.posts.forEach((cur, index) => {
        if (post.id === cur.id) {
          this.posts.splice(index, 1);
        }
      });
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = { id: 0, title: '', body: '' };
      }
    });
  }
}
