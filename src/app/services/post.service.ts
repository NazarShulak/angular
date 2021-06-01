import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../models/Post.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = environment.url + '/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url);
  }
}
