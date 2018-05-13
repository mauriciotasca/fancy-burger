import {Routes} from '@angular/router';
import {ItemDetailsComponent} from './item-details.component';

export const itemDetailsRoutes: Routes = [
  { path: 'details/:name', component: ItemDetailsComponent }
];
