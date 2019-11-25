import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  loggedInUser: User = {_id: '1', firstName:'Christian', lastName: 'K'} as User;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    console.log("Auth Service");  

    return of(true).pipe(
      delay(1000),
      tap(val => {
        console.log("test if this is running");
        this.isLoggedIn = true
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}