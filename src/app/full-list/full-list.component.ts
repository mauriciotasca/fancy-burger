import {Component, OnInit} from '@angular/core';
import {ItemDetailsService} from '../shared/item-details/item-details.service';
import {FancyItem} from '../shared/models/item';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {
  allItems = [] as FancyItem[];
  searchTerm = '';

  constructor(private itemDetailsService: ItemDetailsService) {
    this.itemDetailsService.getAllItems().subscribe((response: any) => {
      this.allItems = response.data as FancyItem[];
    });
  }

  ngOnInit() {
  }

}
