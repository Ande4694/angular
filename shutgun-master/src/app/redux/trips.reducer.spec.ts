const deepFreeze = require('deep-freeze');
import { tripsReducer } from './trips.reducer';
import { DataService } from './../data.service';
import * as types from './../find-a-lift/lift-actions';
import { Trip } from './../entities/trip';

describe('trips reducer', () => {
    it('should return the initial state', () => {

        //ONELINER
        //expect(tripsReducer(undefined, {})).toEqual({isLift: false, lifts: (new DataService).tempData});

        //ARRANGE
        const ds = new DataService();
        const expectedOutput = {isLift: false, lifts: ds.tempData};

        //ACT
        const result = tripsReducer(undefined, {})

        //ASSERT
        expect(result).toEqual(expectedOutput);
    });


    it('Set isLift to true', () => {
        //ARANGE
        const ds = new DataService();
        const expectedOutput = {isLift: true, lifts: ds.tempData};
        const inputState = {isLift: false, lifts: ds.tempData};
        const actionObject = {type: types.LiftActions.SET_TYPE, payload: true};



        //ACT
        const result = tripsReducer(inputState, actionObject);

        //ASSERT
        //checker om der er sket mutationer
        deepFreeze(inputState);
        expect(result).toEqual(expectedOutput);

    });

    it('should be able to create a new trip, without mutating the array of trips', () =>{

        //ARRANGE
        const trip = new Trip();
        const ds = new DataService();
        const expectedOutput = {isLift: false, lifts: ds.tempData.concat(trip)};
        const inputState = {isLift: false, lifts: ds.tempData};
        const actionObject = {type: types.LiftActions.CREATE_TRIP, payload: trip}

        //ACT
        const result = tripsReducer(inputState, actionObject);

        //ASSERT
        deepFreeze(inputState);
        expect(result).toEqual(expectedOutput);
    });

    // it('should be able to delete a trip, without mutating the array of trips', () =>{

    //     //ARRANGE
    //     const ds = new DataService();
    //     const expectedOutput = {isLift: false, lifts: ds.tempData.filter(x => x._id !== 1)}
    // });
});
