import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {UserComponent} from './modules/user/components/user/user.component';
import {UsersComponent} from './modules/user/components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {UserResolver} from "./modules/user/services/user.resolver";
import {UserDetailsComponent} from './modules/user/components/user-details/user-details.component';
import {PostsComponent} from './modules/post/components/posts/posts.component';
import {PostComponent} from './modules/post/components/post/post.component';
import {PostDetailsComponent} from './modules/post/components/post-details/post-details.component';
import {PostResolver} from "./modules/post/services/post.resolver";

let roots: Routes = [
  {
    path: 'users', loadChildren:() =>import('./modules/user/user.module') , resolve: {data: UserResolver},
    children: [{path: ':id', component: UserDetailsComponent}]
  }, {
    path: 'posts', component: PostsComponent, resolve: {data: PostResolver},
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
