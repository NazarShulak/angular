import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  state = new BehaviorSubject<string>('Anonymous');

  constructor() {
  }
}
