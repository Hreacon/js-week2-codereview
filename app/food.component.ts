import { Component } from 'angular2/core';
import { Food, IFood } from './food.module';
import { EditFoodComponent } from './edit-food.component';

@Component({
  selector: 'food-view',
  inputs: ['food'],
  directives: [EditFoodComponent],
  template: `
    <div class="food">
      <div *ngIf="displayMain">
        <h1 (click)="foodSelected()">{{ food.name }}</h1>
        <div class="details" *ngIf="displayDetails" (click)="editFood()">
          <p>{{ food.description }}</p>
          <p>Calories: {{ food.calories }}</p> 
        </div>
      </div>
      <edit-food [food]="food" *ngIf="!displayMain" (closeForm)="closeForm()"></edit-food>
    </div>

  `
})
export class FoodComponent {
  public food: Food;
  public displayDetails: boolean = false;
  public displayMain: boolean = true;
  constructor(){

  }
  foodSelected() {
    this.displayDetails = !this.displayDetails;
  }

  editFood() {
    this.displayMain = !this.displayMain;
  }

  closeForm() {
    this.editFood();
  }
}
