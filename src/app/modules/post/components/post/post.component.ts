import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../../user/models/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:PostInterface;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showComments() {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute});
  }
}
