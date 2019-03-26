import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SigninService } from './components/signin/signin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private signinService: SigninService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.signinService.isLogin()) {
        return true;
      } else {
        console.log('Please log in...');
        this.router.navigate(['']);
      }
  }
}
