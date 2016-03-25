import { Component } from 'angular2/core';
import { Food } from './food.module';
import { FoodComponent } from './food.component';
import { FoodPipe } from './food.pipe';
import { DayPipe } from './day.pipe';

@Component({
  selector: "food-list",
  inputs: ['foodList', 'filterAmount', 'day'],
  pipes: [FoodPipe, DayPipe], 
  directives: [FoodComponent],
  template: `
    <food-view *ngFor="#currentFood of foodList | dayPipe:day | foodPipe:filterAmount" [food]="currentFood"></food-view>
  `
})
export class FoodListComponent {
  public day: string='';
  public foodList: Food[];
  public filterAmount: number;
  constructor(){
  }
}
