import {Component, Input, OnInit} from '@angular/core';
import {UserPostsInterface} from "../../models/user-posts.interface";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input()
  post: UserPostsInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
