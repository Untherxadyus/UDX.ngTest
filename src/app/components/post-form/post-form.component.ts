import { Post } from './../../models/Post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output()
  newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert('Please Add post!');
    } else {
      const post: Post = { title: title, body: body };

      this.postsService.add(post).subscribe(p => {
        this.newPost.emit(p);
      });
    }
  }
}
