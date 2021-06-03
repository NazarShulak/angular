import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostCommentsInterface} from "../models/post-comments.interface";

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {

  private url = environment.url + '/comments?postId=';

  constructor(private httpClient: HttpClient) {
  }

  getComments(id: number): Observable<PostCommentsInterface[]> {
    return this.httpClient.get<PostCommentsInterface[]>(this.url + id);
  }

}
