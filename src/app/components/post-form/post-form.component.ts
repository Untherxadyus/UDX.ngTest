import { Post } from './../../models/Post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output()
  newPost: EventEmitter<Post> = new EventEmitter();

  @Output()
  updatedPost: EventEmitter<Post> = new EventEmitter();

  @Input()
  currentPost: Post;

  @Input()
  isEdit: Boolean;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  addPost(post: Post) {
    if (!post.title || !post.body) {
      alert('Please Add post!');
    } else {
      post.id = null;
      this.postsService.add(post).subscribe(p => {
        this.newPost.emit(p);
      });
    }
  }

  updatePost(post: Post) {
    this.postsService.update(post).subscribe(p => {
      this.isEdit = false;
      this.updatedPost.emit(p);
    });
  }
}
