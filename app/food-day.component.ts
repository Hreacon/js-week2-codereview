import { Component } from 'angular2/core';
import { Food } from './food.module';
import { FoodFilterComponent } from './food-filter.component';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'food-day',
  inputs: ['day', 'foodList'],
  directives: [FoodFilterComponent, FoodListComponent],
  template: `
    <div class="day" style="background:linear-gradient({{ getFullness() }})">
      <h3 (click)="toggleDisplay()">{{ day }} - Calories: {{ getDailyCalories() }}</h3>
      <div *ngIf="display">
        <food-filter (filterEvent)=filterEvent($event)></food-filter>
        <food-list [foodList]="foodList" [day]="day" [filterAmount]="filterAmount"></food-list>
      </div>
    </div> 
  `
})
export class FoodDayComponent {
  public day: string;
  public foodList: Food[];
  public filterAmount: number = 9999;
  public display: boolean = false;
  constructor(){
  }
  filterEvent(amount: number) {
    this.filterAmount = amount;
  }

  toggleDisplay() {
    this.display = !this.display;
  }

  getDailyCalories(): number {
    var calories = 0;
    for(var i = 0; i < this.foodList.length; i++) {
      if(this.foodList[i].getDate() == this.day)
        calories += this.foodList[i].calories;
    }
    return calories;
  }

  getFullness(): string {
    // calories for the day divided by the recommended 2000 calories a day
    var calories = this.getDailyCalories();
    if(calories > 2000)
      return '90deg, red '+((calories-2000)/1000*100-3)+'%, green '+((calories-2000)/1000*100)+'%';
    else if(calories < 1900)
      return '90deg, green '+(calories/2000*100-3)+'%, white '+(calories/2000*100)+'%';
    else return '90deg, green '+(calories/2000*100-1)+'%, white '+(calories/2000*100+1)+'%';
  }
}
