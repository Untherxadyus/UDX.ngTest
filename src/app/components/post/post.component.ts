import { Post } from './../../models/Post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.postsService.get(id).subscribe(p => {
      this.post = p;
    });
  }
}
