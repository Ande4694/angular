import { AdminService } from './admin.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private adminService: AdminService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log(this.authService.isLoggedIn);
      // If logged in => return true;
      // If not logged in => return false;
      if (this.authService.isLoggedIn || this.adminService.isAdmin) {
        return true;
      } else {
        return false;
      }
    
      
  }
  
}
