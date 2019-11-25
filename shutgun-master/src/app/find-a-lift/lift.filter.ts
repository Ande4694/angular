import { Trip } from '../entities/trip';
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { isIdentifier } from '@angular/compiler';

@Pipe({name: 'filterLift'})
@Injectable()
export class FilterLift implements PipeTransform {
  transform(items: Trip[], search: any): any {
    console.log(search);

    if(search === undefined) {
      return items;
    }

    search = search.toLowerCase();
    return items.filter(x => x.origin && x.origin.toLowerCase().includes(search)
     || x. destination && x.destination.toLowerCase().includes(search)
     || x.availableSeats >= search);
    }

}




