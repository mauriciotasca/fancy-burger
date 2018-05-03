import {Component, OnInit} from '@angular/core';
import {MealsService} from './meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  constructor(private mealsService: MealsService) {
  }

  ngOnInit() {
    this.mealsService.getMeals().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(`Error while fetching meals! ${error.toString()}`);
      });
  }

}
