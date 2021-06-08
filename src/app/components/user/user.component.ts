import {EventEmitter} from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from "../../models/user.interface";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserInterface;

  @Output()
  userEmitter = new EventEmitter<UserInterface>();

  constructor() {

  }

  ngOnInit(): void {
  }

  showDetails() {
    this.userEmitter.emit(this.user);
  }
}
