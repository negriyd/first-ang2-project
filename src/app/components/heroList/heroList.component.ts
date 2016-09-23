import {Component} from '@angular/core';
@Component({
  selector: 'heroList',
  templateUrl: 'heroList.component.html',
})
export class HeroList {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
