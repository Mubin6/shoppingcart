import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { urlConst } from '../../const';
import { Registration } from './signIn';
import { LocalStorageService } from 'angular-2-local-storage';
import { ReplaySubject } from 'rxjs/ReplaySubject';
// import {Observable} from 'rxjs';

@Injectable()
export class SigninService {
  loginUrl = `${urlConst.baseUrl}/tag/LoginCheck/`;
  registerUrl = `${urlConst.baseUrl}/tag/RegisterUser`;
  forgotPasswordUrl = `${urlConst.baseUrl}/forgotpwd/sendMail`;
  user: any;
  isUserInfo = new ReplaySubject();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  isLogin() {
    return this.localStorageService.get('userInfo');
  }

  logout() {
    this.localStorageService.remove('userInfo');
    this.user = this.localStorageService.get('userInfo');
    console.log('this.user_Service', this.user);
    this.isUserInfo.next(this.user);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getLogin(emailid, password) {
    return this.http.get(this.loginUrl, {
      params: new HttpParams().set('emailid', emailid).set('password', password)
    });
    // {responseType: 'text'}
  }
  saveRegisteration(registration: Registration) {
    return this.http.post(this.registerUrl, registration, {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
      responseType: 'text'
    });
  }

  forgotPassword(emailid) {
    return this.http.get(`${this.forgotPasswordUrl}/${emailid}/`, {
      responseType: 'text'
    });
  }

}
