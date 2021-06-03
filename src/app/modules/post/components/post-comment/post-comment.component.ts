import {Component, Input, OnInit} from '@angular/core';
import {PostCommentsInterface} from "../../models/post-comments.interface";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  @Input()
  comment: PostCommentsInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
