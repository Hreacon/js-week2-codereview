import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.module';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  outputs: ['closeForm'],
  template: `
    <div>
      <input [(ngModel)]="food.name" autofocus>
      <input [(ngModel)]="food.description">
      <input type="number" min="0" [(ngModel)]="food.calories">
      <input type="button" (click)="onCloseForm()" value="Close Form">
    </div>
  `
})
export class EditFoodComponent {
  public closeForm: EventEmitter<Object>;
  constructor() {
    this.closeForm = new EventEmitter();
  }

  onCloseForm() {
    this.closeForm.emit({});
  }
}
