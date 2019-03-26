import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlConst } from '../const';

@Injectable()
export class CartService {
  productOrderListUrl = `${urlConst.baseUrl}/cart/productsOrderList`;
  constructor(
    private http: HttpClient
  ) { }

  getProductOrderList() {
    return this.http.get(this.productOrderListUrl);
  }

}
