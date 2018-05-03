import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fancy Burger';
  public shouldDisplayBlankState;
  public shouldDisplayMeals;


  constructor() {
    this.shouldDisplayBlankState = true;
    this.shouldDisplayMeals = false;
  }

  private hideBlankState() {
    this.shouldDisplayBlankState = false;
  }

  toggleMealsDisplay(shouldDisplay: boolean) {
    this.shouldDisplayMeals = shouldDisplay;
    this.hideBlankState();
  }


}
