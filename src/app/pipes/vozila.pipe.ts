import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vozilaPipe'
})
export class VozilaPipe implements PipeTransform {

  transform(items: any[], searchText: string, start: number, end: number): any[] {
    
    if(!items) return [];

    if(!searchText) return items.slice(start,end);

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      if(item && item.kategorija.naziv) return item.kategorija.naziv.toLowerCase().includes(searchText);
      else return false;
    })
  }

}
