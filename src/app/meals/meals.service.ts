import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MealsService {

  constructor(private httpClient: HttpClient) {
  }

  getMeals() {
    return this.httpClient.get('assets/data/meals.json');
  }


}
