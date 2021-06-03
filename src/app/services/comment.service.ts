import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(this.url);
  }
}
