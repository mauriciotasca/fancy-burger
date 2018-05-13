import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'itemFilterComplete'
})
export class ItemFilterCompletePipe implements PipeTransform {

  transform(list: Array<any>, itemName?: string, description?: string): any {

    if (!itemName && !description) {
      return list;
    }

    return list.filter((item) => {
      return hasItem(item);
    });

    function hasItem(item: any) {
      const currentNameLower = item.name.toLocaleLowerCase();
      const currentDescriptionLower = item.description.toLocaleLowerCase();

      const searchNameLower = itemName.toLocaleLowerCase();
      const searchDescriptionLower = itemName.toLocaleLowerCase();

      return (currentNameLower.indexOf(searchNameLower) > -1 ) || (currentDescriptionLower.indexOf(searchDescriptionLower) > -1 ) ;
    }
  }

}
