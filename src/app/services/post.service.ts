import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../models/Post.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = environment.url + '/posts?userId=';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(id: number): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url + id);
  }
}
