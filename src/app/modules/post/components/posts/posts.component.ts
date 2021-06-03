import { Component, OnInit } from '@angular/core';
import {UserInterface} from "../../../user/models/user.interface";
import {ActivatedRoute} from "@angular/router";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.posts = value.data
    })

  }
  ngOnInit(): void {
  }

}
