import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../services/cars.service";
import {CarInterface} from "../../models/car.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  model = new FormControl('',[]);
  price = new FormControl(0);
  year = new FormControl(0);


  cars = new FormGroup({
    model: this.model,
    price: this.price,
    year: this.year
  })


  constructor(private carsService: CarsService,private router:Router) {
  }

  ngOnInit(): void {
  }


  save():void {
    this.carsService.postCar(this.cars.value).subscribe(()=>{
      this.router.navigate(['cars'])
      let car = {
        model: this.cars.controls.model.value,
        price: this.cars.controls.price.value,
        year: this.cars.controls.year.value
      }
      this.carsService.postCar(car);
    })
  }
}
