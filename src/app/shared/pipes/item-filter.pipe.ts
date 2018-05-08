import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(list: Array<any>, itemName?: string): any {

    if (!itemName) {
      return list;
    }

    return list.filter((item) => {
      return hasItem(item);
    });

    function hasItem(item: any) {
      const currentNameLower = item.name.toLocaleLowerCase();
      const searchNameLower = itemName.toLocaleLowerCase();

      return currentNameLower.indexOf(searchNameLower) > -1;
    }
  }


}
