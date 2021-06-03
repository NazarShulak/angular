import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserInterface} from "../models/user.interface";
import {UserPostsInterface} from "../models/user-posts.interface";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private url = environment.url + '/posts?userId=';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(id: number): Observable<UserPostsInterface[]> {
    return this.httpClient.get<UserPostsInterface[]>(this.url + id)
  }
}
