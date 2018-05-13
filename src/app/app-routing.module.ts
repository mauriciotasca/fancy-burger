import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {mealsRoutes} from './meals/meals.routing';
import {drinksRoutes} from './drinks/drinks.routing';
import {homeRoutes} from './home/home.routing';
import {notFoundRoutes} from './not-found/not-found.routing';
import {itemDetailsRoutes} from './shared/item-details/item-detail.routing';
import {fullListRoutes} from './full-list/full-list.routing';

const routes: Routes = [
  ...mealsRoutes,
  ...drinksRoutes,
  ...itemDetailsRoutes,
  ...homeRoutes,
  ...fullListRoutes,
  ...notFoundRoutes,
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {

}
