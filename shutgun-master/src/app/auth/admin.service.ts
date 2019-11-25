import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  loginAdmin(): Observable<boolean> {
    console.log("Admin Service");  

    return of(true).pipe(
      delay(1000),
      tap(val => {
        console.log("test if this is running");
        this.isAdmin = true
      })
    );
  }

  logout(): void {
    this.isAdmin = false;
  }
}