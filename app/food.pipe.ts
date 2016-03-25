import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.module';

@Pipe({
  name: 'foodPipe',
  pure: false
})
export class FoodPipe {
  transform(input: Food[], args) {
    var desiredCalories = args[0];
    if(desiredCalories === 300)
      return input.filter(function(food) {
        return food.calories < 301;
      });
    else if(desiredCalories === 301)
      return input.filter(function(food) {
        return food.calories > 300;
      });
    else return input;
  }
}
