import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersResolver} from "./services/users.resolver";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostsResolver} from "./services/posts.resolver";

let roots: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UsersResolver},
    children: [{path: ':id', component: UserDetailsComponent}]
  }, {
    path: 'posts', component: PostsComponent, resolve: {data: PostsResolver},
    children: [{path: ':id', component: PostDetailsComponent}]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavBarComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
