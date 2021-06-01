import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersResolver} from "./services/users.resolver";

let roots: Routes = [
  {path: 'users', component: UsersComponent, resolve: {data: UsersResolver}}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    NavBarComponent
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
