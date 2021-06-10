import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarInterface} from "../models/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private url = 'http://192.168.88.253/api/v1/cars';

  constructor(private httpClient: HttpClient) {
  }

  getAllCars(): Observable<CarInterface[]> {
    return this.httpClient.get<CarInterface[]>(this.url);
  }

  postCar(car: CarInterface) {
    return this.httpClient.post(this.url, car);
  }
}
