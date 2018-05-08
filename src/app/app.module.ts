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

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    ItemListComponent,
    DrinksComponent,
    HomeComponent,
    NotFoundComponent,
    ItemFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
