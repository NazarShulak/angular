import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../models/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:UserInterface;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showPosts() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute});
  }
}
