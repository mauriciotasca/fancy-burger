import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemDetailsService} from './item-details.service';
import {FancyItem} from '../models/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: FancyItem;

  constructor(private route: ActivatedRoute, private itemDetailsService: ItemDetailsService) {
    this.item = new FancyItem();
  }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      this.itemDetailsService.getItemByName(params['name']).subscribe(
        (response: any) => {
          this.item = response.data as FancyItem;
        });

    });
  }

}
