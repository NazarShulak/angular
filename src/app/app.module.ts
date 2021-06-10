import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {CarFormComponent} from './components/car-form/car-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";


let routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'add', component: CarFormComponent},
  {path: 'cars', component: CarsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
