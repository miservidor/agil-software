import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byuser'
})
export class ByuserPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    if (!items) return [];        
        return items.filter(it => it.createdby == args);
  }

}