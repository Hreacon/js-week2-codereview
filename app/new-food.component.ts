import { Component, EventEmitter } from 'angular2/core';
import { IFood } from './food.module';

@Component({
  selector: 'new-food',
  outputs: ['onCreateFood'],
  template: `
    <form (submit)="createFood(name, description, calories)">
      <label for="name">What you ate:</label><input type="text" name="name" #name>
      <label for="description">Full Description:</label><input type="text" name="description" #description>
      <label for="calories">Calories:</label><input type="number" name="calories" #calories>
      <input type="submit" value="Add Food to Log">
    </form>
  `
})
export class NewFoodComponent {
  public onCreateFood: EventEmitter<IFood>;
  constructor(){
    this.onCreateFood = new EventEmitter();
  }

  createFood(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement) {
    this.onCreateFood.emit({
      name: name.value,
      description: description.value,
      calories: parseInt(calories.value)
    });
  }
}
