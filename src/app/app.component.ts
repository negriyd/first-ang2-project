import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clickCount = 0;
  clickEvent;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

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
}
