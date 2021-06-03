import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserPostsService} from "../../services/user-posts.service";
import {UserPostsInterface} from "../../models/user-posts.interface";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: UserPostsInterface[];

  constructor(private userPostsService: UserPostsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userPostsService.getPosts(id).subscribe(value => this.posts = value)
    })
  }

  ngOnInit(): void {
  }

}
