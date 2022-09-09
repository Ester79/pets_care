import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FoodInterface } from 'src/app/interfaces/foodInterface.interface';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  listFood: FoodInterface[] = [];

  constructor(private router: Router, private rougintModule: AppRoutingModule, private foodService: FoodServiceService) { }

  ngOnInit(): void {
    this.loadListFood();
  }

  loadListFood(): void {
    this.foodService.getFoodList()
    .subscribe(element => this.listFood = element);
  }

}
