import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      

      console.log(this.adminService.isAdmin);
      // If logged in => return true;
      // If not logged in => return false;
      if (this.adminService.isAdmin) {
        return true;
      } else {
        return false;
      }
    

  }
  
}
