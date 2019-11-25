import { Trip } from './../entities/trip';
import { DataService } from './../data.service';
import { tassign } from 'tassign';
import { TripState } from './store';
import { LiftActions } from '../find-a-lift/lift-actions';


const INITIAL_STATE: TripState = {isLift: false, lifts: (new DataService).tempData};

export function tripsReducer(state: TripState = INITIAL_STATE, action: any) {
 switch (action.type) {

  case LiftActions.CREATE_TRIP:

    //create cope of array
    //add new lift to the copy of the array
    return tassign(state, {lifts: state.lifts.concat([action.payload])});

  case LiftActions.DEL_TRIP:

    // lav ny array UDEN actions.payload
    const nyTrip : Trip[] = state.lifts.filter(x => x._id !== action.payload)
    return tassign(state, {lifts: nyTrip});

  case LiftActions.SET_TYPE:

    // return Object.assign({}, state,{ isLifts: action.payload });
    return tassign(state, { isLift: action.payload });

   default:
    return state;
  }
}
