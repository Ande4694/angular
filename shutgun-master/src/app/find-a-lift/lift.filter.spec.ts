import { DataService } from './../data.service';
import { Trip } from './../entities/trip';
import { TestBed, async } from '@angular/core/testing';
import { FilterLift } from './lift.filter';
import { User } from '../entities/user';


// find lifts by searching destination

// find lifts by searching origin

// find lifts by searching available seats

// dont find lifts when searching by origin

// dont find lifts when searching by destination

// dont find lifts when searching by seats

// get all lifts when search string is undefined

// search when there are no lifts

// search for negativ number of seats

// search for destination but the data  to search doesnt have a valid destination

describe('liftFilter', () => {

 beforeEach(() => {


   TestBed.configureTestingModule({
     declarations: [
       FilterLift
     ],
   });
 });



 it('find lifts by searching origin', () => {
  //ARRANGE
  const searchInput = 'albertslu';

  const data = new DataService();

  const filter = new FilterLift();

  const expectedResult = [{_id: '3fdska',
  origin: 'Albertslund',
  destination: 'Copenhagen',
  availableSeats: 4,
  departureTime: new Date(2019, 0, 1, 8, 0,0 ),
  owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];



  //ACT
  const result = filter.transform(data.tempData, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);

  });

 it('find lifts by searching destination', () => {
    //ARRANGE
    const searchInput = 'copenhagen';

    const data = new DataService();

    const expectedResult = [
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

    const filter = new FilterLift();
    //ACT
    const result = filter.transform(data.tempData, searchInput);
    //ASSERT
    expect(result).toEqual(expectedResult);
    });

 it('find lifts by searching available seats', () => {
      //ARRANGe
      const searchInput = '7';

      const data = new DataService();

      const filter = new FilterLift();

      const trip =  {_id: '7',
      origin: 'Roskilde',
      destination: 'Copenhagen',
      availableSeats: 7,
      departureTime: new Date(2019, 1, 2, 9, 0,0 ),
      owner: {_id: '2', firstName: 'Simon'} as User };

      const expectedResult = [{_id: '7',
      origin: 'Roskilde',
      destination: 'Copenhagen',
      availableSeats: 7,
      departureTime: new Date(2019, 1, 2, 9, 0,0 ),
      owner: {_id: '2', firstName: 'Simon'} as User }];

      data.tempData.push(trip);

      //ACT
      const result = filter.transform(data.tempData, searchInput);

      //ASSERT
      expect(result).toEqual(expectedResult);
      });

 it('dont find lifts when searching by origin', () => {
  // ARRANGE
  const searchInput = 'bertram';

  const data = new DataService();

  const filter = new FilterLift();

  const expectedResult = [];
  //ACT
  const result= filter.transform(data.tempData, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);
  });

 it('dont find lifts when searching by destination', () => {
    //ARRANGE
    const searchInput = 'tuborg';

    const data = new DataService();

    const filter = new FilterLift();

    const expectedResult = [];
    //ACT
    const result= filter.transform(data.tempData, searchInput);

    //ASSERT
    expect(result).toEqual(expectedResult);
    });

 it('dont find lifts when searching by seats', () => {
    //ARRANGE
    const searchInput = '9';

    const data = new DataService();

    const filter = new FilterLift();

    const expectedResult = [];
    //ACT
    const result = filter.transform(data.tempData, searchInput);

    //ASSERT
    expect(result).toEqual(expectedResult);
    });

 it('get all lifts when search string is undefined', () => {
  //ARRANGE
  const searchInput = undefined;

  const data = new DataService();

  const filter = new FilterLift();

  const expectedResult = data.tempData;
  //ACT
  const result = filter.transform(data.tempData, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);
  });

 it('search when there are no lifts', () => {
  //ARRANGE
  const searchInput = 'albertslu';

  const data = [];

  const filter = new FilterLift();

  const expectedResult = [];
  //ACT
  const result = filter.transform(data, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);
  });

 it('search for negativ number of seats', () => {
  //ARRANGE
  const searchInput = '-4';

  const data = new DataService();

  const filter = new FilterLift();

  const expectedResult = data.tempData;
  //ACT
  const result = filter.transform(data.tempData, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);
  });

 it('search for destination but the data  to search doesnt have a valid destination', () => {
  //ARRANGE
  const searchInput = 'albertslu';

  const data = [
    {_id: '3fdska',
    origin: undefined,
    destination: undefined,
    availableSeats: 4,
    departureTime: new Date(2019, 0, 1, 8, 0,0 ),
    owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User },

    {_id: '2',
    origin: undefined,
    destination: undefined,
    availableSeats: 4,
    departureTime: new Date(2019, 1, 1, 8, 0,0 ),
    owner: {_id: '1', firstName: 'Christian'} as User },

    {_id: '3',
    origin: undefined,
    destination: undefined,
    availableSeats: 3,
    departureTime: new Date(2019, 1, 2, 9, 0,0 ),
    owner: {_id: '2', firstName: 'Simon'} as User }
  ];

  const filter = new FilterLift();

  const expectedResult = [];
  //ACT
  const result = filter.transform(data, searchInput);

  //ASSERT
  expect(result).toEqual(expectedResult);
  });

});
