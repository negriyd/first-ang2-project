import {Component, Input} from '@angular/core';
@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html',
})
export class Counter {
  @Input() public count;
  increment() {
    this.count++;
  }
}
