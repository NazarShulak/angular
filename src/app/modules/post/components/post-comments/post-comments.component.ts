import {Component, Input, OnInit} from '@angular/core';
import {PostCommentsService} from "../../services/post-comments.service";
import {PostCommentsInterface} from "../../models/post-comments.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {


  comments: PostCommentsInterface[];

  constructor(private postCommentsService: PostCommentsService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(({id}) => {
      this.postCommentsService.getComments(id).subscribe(value => this.comments = value);

    })
  }

  ngOnInit(): void {
  }

}
