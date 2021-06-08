import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../models/user.interface";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: UserInterface;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {

  }

  login() {
    this.dataTransferService.state.next(this.user.username);

  }
}
