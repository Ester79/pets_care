import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { FoodInterface } from '../interfaces/foodInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  endPointFood: string = "assets/data/foodData.json";

  constructor(private httpClient: HttpClient) { }

  //Get food list
  getFoodList(): Observable<FoodInterface[]> {
    return this.httpClient.get<FoodInterface[]>(this.endPointFood);
  }
}
