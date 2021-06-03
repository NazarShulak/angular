import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserResolver} from "./services/user.resolver";
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import {UserComponent} from "./components/user/user.component";
import {UsersComponent} from "./components/users/users.component";
import {UserPostsService} from "./services/user-posts.service";


@NgModule({
  declarations: [
    UserPostsComponent,
    UserPostComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[UserResolver,UserPostsService]
})
export class UserModule { }
