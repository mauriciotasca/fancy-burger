import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ItemDetailsService {

  allItems: Array<any>;

  constructor(private httpClient: HttpClient) {
    this.allItems = [];
  }

  getItemByName(itemName) {
    return Observable.create(observer => {
      this.getAllItems().subscribe((response) => {
        const filteredItem = response.data.filter(x => x.name === itemName);
        observer.next({data: filteredItem[0]});
        observer.complete();
      });
    });
  }

  getAllItems() {
    let meals = [];
    let drinks = [];


    if (this.allItems.length > 0) {
      return Observable.create(observer => {
        observer.next({data: this.allItems});
        observer.complete();
      });
    } else {

      return Observable.create(
        observer => {

          this.httpClient.get('assets/data/meals.json').subscribe((firstResponse: any) => {
            meals = firstResponse.data;

            this.httpClient.get('assets/data/drinks.json').subscribe((secondResponse: any) => {

              drinks = secondResponse.data;
              this.allItems = meals.concat(drinks);
              observer.next({data: this.allItems});
              observer.complete();
            });
          });

        },

        error => {

          error.next([]);
          error.complete();

        }
      );
    }
  }

}
