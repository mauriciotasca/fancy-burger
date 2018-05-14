import {Component, OnInit} from '@angular/core';
import {MealsService} from './meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  public meals: any;
  public userName = '';
  public item = {name: 'Item 1'};
  public isDisabled = false;

  constructor(private mealsService: MealsService) {
    this.getMeals();
  }

  getMeals() {
    this.mealsService.getMeals().subscribe(
      (response: any) => {
        this.meals = response.data;
      },
      (error) => {
        console.log(`Error while fetching meals! ${error.toString()}`);
      });
  }

  ngOnInit() {
  }

  sendButtonClick($event) {
    console.log('Clicked!');
  }

  logEvent($event) {
    console.log($event);
  }
}
