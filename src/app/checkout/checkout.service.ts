import { Injectable } from '@angular/core';
import { urlConst } from '../const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckOutDetails } from '../domainmodel/checkoutDetails';

@Injectable()
export class CheckoutService {
  private readonly checkoutUrl = `${urlConst.baseUrl}/secured/cart/checkout/`;
  private readonly sendMailUrl = `${urlConst.baseUrl}/secured/order/sendMail`;
  constructor(
    private http: HttpClient
  ) { }

  saveCheckOut(checkOut: CheckOutDetails) {
    return this.http.post(this.checkoutUrl, checkOut, {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    });
  }

  sendMail(mailBody) {
    return  this.http.post(this.sendMailUrl, mailBody, {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
      responseType: 'text'
    });
  }




}
