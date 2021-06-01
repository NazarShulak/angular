import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}


