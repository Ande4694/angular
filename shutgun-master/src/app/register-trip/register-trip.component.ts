import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from '../entities/trip';
import { LiftActions } from '../find-a-lift/lift-actions';

@Component({
  selector: 'app-register-trip',
  templateUrl: './register-trip.component.html',
  styleUrls: ['./register-trip.component.scss']
})
export class RegisterTripComponent implements OnInit {
  tripForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private data: DataService,
    private auth: AuthService, private action: LiftActions) { }

  ngOnInit() {
    this.tripForm = this.fb.group({
      'origin': ['', Validators.required],
      'destination': ['', Validators.required],
      'availableSeats': ['', Validators.required],
      'departureTime': ['', Validators.required],
    });
  }

  onTripSubmit() : void {
    if (this.tripForm.valid) {
      let trip = this.tripForm.value as Trip;
      trip.owner = this.auth.loggedInUser;

      this.action.addLift(trip);
      //this.data.addTrip(trip);
      this.router.navigate(['/portal/findalift']);
    }
  }
}
