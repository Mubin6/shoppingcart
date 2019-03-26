import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SigninService } from './components/signin/signin.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector,
  ) { }

  intercept(req, next) {
    const signinService = this.injector.get(SigninService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Token ${signinService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
