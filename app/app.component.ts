import { Component } from 'angular2/core';
import { FoodDayComponent } from './food-day.component';
import { Food, IFood } from './food.module';
import { NewFoodComponent } from './new-food.component';
 
@Component({
  selector: 'my-app',
  directives: [FoodDayComponent, NewFoodComponent],
  template: `
    <div class="header">
      <h1>Food Log</h1>
      <p>Average Daily Calories: {{ getAverageCalories() }}</p>
    </div>
    <new-food (onCreateFood)="createFood($event)"></new-food>
    <food-day *ngFor="#currentDay of dates" [day]="currentDay" [foodList]="foods"></food-day>
  `
})
export class AppComponent {
  public foods: Food[];
  public dates: string[] = [];
  constructor() {
    console.log("AppComponent Constructor");
    this.foods = [
      new Food("Burger", "Delicious bacon cheeseburger", 800, new Date(2016,2,24), 0),
      new Food("Side salad", "a few leafs of lettuce and a breath of dressing", 100, new Date(), 0)
    ];
    this.setDates();
  }
  setDates() {
    for(var i = 0; i < this.foods.length; i++) {
      if(this.dates.indexOf(this.foods[i].getDate()) < 0) {
        this.dates.push(this.foods[i].getDate());
      }
    }
    console.log("Set Dates: ", this.dates);
  }
  getAverageCalories(): number {
    var calories=0;
    for(var i=0; i<this.foods.length;i++){
      calories += this.foods[i].calories;
    }
    return calories/this.dates.length;
  }
  createFood(ifood: IFood) {
    this.foods.push(new Food(ifood.name, ifood.description, ifood.calories, new Date(), this.foods.length));
  }
}
