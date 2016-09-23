import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  clickCount = 0;
  clickEvent;
  parentCount: number = 0;
  num: number = 1;

  getMessage() {
    return 'Button clicked ' + this.clickCount + ' times';
  }

  clicked(event: MouseEvent) {
    this.clickCount = this.clickCount + 1;
    this.clickEvent = event;
    console.log(event);
  }

  isCtrlPressed() {
    return this.clickEvent != null ? this.clickEvent.ctrlKey : 'not clicked';
  }

  onChangeCounter(val: number) {
    this.parentCount = val;
  }

  getCounterValue() {
    return this.parentCount;
  }
}
