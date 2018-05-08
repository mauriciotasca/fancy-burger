import {Component, OnInit} from '@angular/core';
import {DrinksService} from './drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
  providers: [DrinksService]
})
export class DrinksComponent implements OnInit {

  drinks: Array<any>;

  constructor(private drinksService: DrinksService) {
    this.getDrinks();
  }

  getDrinks() {
    this.drinksService.getDrinks().subscribe(
      (response: any) => {
        this.drinks = response.data;
      },
      (error) => {
      });
  }

  ngOnInit() {
  }

}
