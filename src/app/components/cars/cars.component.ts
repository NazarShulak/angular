import {Component, OnInit} from '@angular/core';
import {CarInterface} from "../../models/car.interface";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: CarInterface[];


  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(value => this.cars = value);

  }

}
