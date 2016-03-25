import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'food-filter',
  outputs: ['filterEvent'],
  template: `
    <div class="foodFilter">
      <button (click)="filterLess()">Healthy!</button>
      <button (click)="filterAll()">All Food Logs</button>
      <button (click)="filterMore()">Un-Healthy...</button>
    </div>
  `
})
export class FoodFilterComponent {
  public filterEvent: EventEmitter<number>;
  constructor() {
    this.filterEvent = new EventEmitter();
  }
  filterLess() {
    this.filterEvent.emit(300);
  }
  filterAll() {
    this.filterEvent.emit(9999);
  }
  filterMore() {
    this.filterEvent.emit(301);
  }
}
