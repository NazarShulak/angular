import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostResolver} from "./services/post.resolver";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostResolver]
})
export class PostModule {
}
