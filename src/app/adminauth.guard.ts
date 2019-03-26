import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SigninService } from './components/signin/signin.service';

@Injectable()
export class AdminauthGuard implements CanActivate {
  user: any;
  constructor(
    private signinService: SigninService,
    private router: Router
  ) {
    this.user = this.signinService.isLogin();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.user && this.user['role'] === 'ADMIN') {
          return true;
      } else {
        console.log('Please login as ADMIN...');
        this.router.navigate(['']);
      }
  }
}
