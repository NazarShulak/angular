import {Component, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from "../../models/User.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:UserInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
