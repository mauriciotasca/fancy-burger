import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() items: any[];
  @Output() itemsChanged?: EventEmitter<any>;

  constructor() { this.itemsChanged = new EventEmitter<any>(); }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changeHappened = changes['items'];
    const arrayAfterChange = changes['items'].currentValue || [];
    const lengthGreaterThanZero = arrayAfterChange.length > 0;

    if (changeHappened && arrayAfterChange && lengthGreaterThanZero) {
      this.itemsChanged.emit();
    }
  }

}
