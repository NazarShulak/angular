import {Component, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from "../../modules/user.interface";
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

  showDetails() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }
}
