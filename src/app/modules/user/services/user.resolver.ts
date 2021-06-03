import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../modules/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserInterface[]> {
  private url = environment.url +'/users';

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.httpClient.get<UserInterface[]>(this.url);
  }


}
