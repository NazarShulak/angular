import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostResolver} from "./services/post.resolver";
import {PostComponent} from "./components/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostCommentsService} from "./services/post-comments.service";
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostCommentsComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostResolver,PostCommentsService]
})
export class PostModule {
}
