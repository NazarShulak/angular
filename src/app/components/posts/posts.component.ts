import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../models/Post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  userId:number;
  posts: PostInterface[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe(value => {
      this.posts = value
    })
  }

}
