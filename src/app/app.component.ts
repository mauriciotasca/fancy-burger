import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fancy Burger';
  public shouldDisplayBlankState;

  constructor() {
    this.shouldDisplayBlankState = true;
  }
}
