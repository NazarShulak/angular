import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/IComment";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params.id).subscribe(value => this.comment = value);
    })
  }

  ngOnInit(): void {
  }

}
