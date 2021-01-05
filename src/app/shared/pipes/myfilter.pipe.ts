import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return items;
    } else {
      let filterItems = items.filter(
        (item) => (item.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) || (item.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
      );
      return filterItems;
    }
  }

}
