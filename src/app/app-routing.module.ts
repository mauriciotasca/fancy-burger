import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DrinksComponent} from './drinks/drinks.component';
import {drinksRoutes} from './drinks/drinks.routing';
import {homeRoutes} from './home/home.routing';
import {notFoundRoutes} from './not-found/not-found.routing';

const routes: Routes = [
  ...drinksRoutes,
  ...homeRoutes,
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
