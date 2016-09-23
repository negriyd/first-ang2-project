import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html',
})
export class Counter {
  @Input() public count: number;
  @Input() public title: string;
  @Output() result: EventEmitter<number> = new EventEmitter();
  increment() {
    this.count++;
    this.result.emit(this.count);
    console.log("title = " + this.title)
  }
}

