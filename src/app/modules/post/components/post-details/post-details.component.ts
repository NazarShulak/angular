import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../../user/modules/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostInterface} from "../../modules/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInterface;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.router.getCurrentNavigation()?.extras.state as PostInterface;
    })


  }

  ngOnInit(): void {
  }
}
