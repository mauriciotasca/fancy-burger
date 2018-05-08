import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DrinksService {

  constructor(private httpClient: HttpClient) {
  }

  getDrinks() {
    return this.httpClient.get('assets/data/drinks.json');
  }
}
