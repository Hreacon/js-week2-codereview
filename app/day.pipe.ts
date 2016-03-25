import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.module';

@Pipe({
  name: 'dayPipe',
  pure: false
})
export class DayPipe {
  transform(input: Food[], args) {
    var desiredDate = args[0];
    if(desiredDate !== 'undefined')
      return input.filter(function(food) {
        return food.getDate() == desiredDate;
      });
    else return input;
  }
}
