import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../models/User.interface";
import {PostInterface} from "../models/Post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<PostInterface[]> {
  private url = environment.url + '/posts';

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url)
  }

}
