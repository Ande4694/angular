import { User } from './entities/user';
import { Injectable } from '@angular/core';
import { Trip } from './entities/trip';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public getTempData()
{
  return this.tempData;
}

 public tempData: Trip[] = [
    {_id: '3fdska',
    origin: 'Albertslund',
    destination: 'Copenhagen',
    availableSeats: 4,
    departureTime: new Date(2019, 0, 1, 8, 0,0 ),
    owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User },

    {_id: '2',
    origin: 'Hillerød',
    destination: 'Copenhagen',
    availableSeats: 4,
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User },

    {_id: '3',
    origin: 'Roskilde',
    destination: 'Copenhagen',
    availableSeats: 3,
    departureTime: new Date(2019, 1, 2, 9, 0,0 ),
    owner: {_id: '2', firstName: 'Simon'} as User }
  ];

  constructor() { }

  addTrip(trip: Trip): void {
    // Generate an _id until we learn to call the web service
    // where an id will be generated for us.
    this.tempData.push(trip);
  }

  deleteTrip(id: string): void {
    //filter might be helpful
    this.tempData = this.tempData.filter(trip => trip._id !== id );

  }
}
