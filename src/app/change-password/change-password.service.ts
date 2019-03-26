import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urlConst } from '../const';
import { ChangePassword } from './change-password';

@Injectable()
export class ChangePasswordService {
  private readonly changePasswordUrl = `${urlConst.baseUrl}/secured/tag/ChangePassword/`;
  constructor(
    private http: HttpClient
  ) { }

  changePassword(changePass: ChangePassword) {
    return this.http.put(this.changePasswordUrl, changePass, {
      responseType: 'text'
    });
  }

}
