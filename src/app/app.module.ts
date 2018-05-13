import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemFilterPipe } from './shared/pipes/item-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ActionTrackerDirective } from './shared/directives/action-tracker/action-tracker.directive';
import { ItemDetailsComponent } from './shared/item-details/item-details.component';
import {ItemDetailsService} from 'app/shared/item-details/item-details.service';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    ItemListComponent,
    DrinksComponent,
    HomeComponent,
    NotFoundComponent,
    ItemFilterPipe,
    ActionTrackerDirective,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
