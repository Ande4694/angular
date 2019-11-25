import { combineReducers } from 'redux';
import { tripsReducer } from './trips.reducer';
import { Trip } from '../entities/trip';

export class TripState {
  isLift: boolean;
  lifts: Trip[];
}

export class AppState {
  trips?: TripState;
}


export const rootReducer = combineReducers<AppState>({
trips: tripsReducer,

// router: routerReducer
});
