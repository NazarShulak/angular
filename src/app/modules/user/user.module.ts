import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserResolver} from "./services/user.resolver";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[UserResolver]
})
export class UserModule { }
