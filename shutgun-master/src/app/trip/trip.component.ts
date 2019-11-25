import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../entities/trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;
  @Output() tripDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteLift(id: string) {
    this.tripDeleteEmitter.emit(id);
  }

}
