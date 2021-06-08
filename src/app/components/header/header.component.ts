import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataTransferService.state.subscribe(value => this.username = value)
  }

}
