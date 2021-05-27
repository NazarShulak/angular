import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../models/Post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostInterface;

  constructor() {
  }

  ngOnInit(): void {

  }


}
