import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../models/User.interface";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[];

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      console.log(value)
    })
  }

}
