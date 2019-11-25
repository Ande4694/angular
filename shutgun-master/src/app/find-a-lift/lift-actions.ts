import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Trip } from '../entities/trip';

@Injectable({ providedIn: 'root'})
export class LiftActions {
constructor (private ngRedux: NgRedux<AppState>) {}

  static SET_TYPE: string = 'SET_TYPE';
  static CREATE_TRIP: string = 'CREATE_TRIP';
  static DEL_TRIP: string = 'DEL_TRIP';

  addLift(lift: Trip): void {
    this.ngRedux.dispatch({
      type: LiftActions.CREATE_TRIP,
      payload: lift
    })
  }

  setType(isLift: boolean): void {
    this.ngRedux.dispatch({
      type: LiftActions.SET_TYPE,
      payload: isLift
    })
  }

  delLift(id: String): void{
    this.ngRedux.dispatch({
      type: LiftActions.DEL_TRIP,
      payload: id
    })
  }

  setAction
}
