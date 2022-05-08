import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthRequest, userKey } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  protected key = 'user';

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    const userStr = localStorage.getItem(userKey);
    if (!userStr) {
      this.router.navigate(['/login']);
      return false;
    }

    const user = JSON.parse(userStr) as AuthRequest;
    if (!user) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
