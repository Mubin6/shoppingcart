import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlConst } from '../const';
import { TagsDescription } from './tags';

@Injectable()
export class TagsService {
  private readonly seeAllProductUrl = `${urlConst.baseUrl}/showme/all`;
  private readonly adminProductCategoryUrl = `${urlConst.baseUrl}/showme/product`;
  constructor(
    private http: HttpClient
  ) { }

  getAllProduct() {
    return this.http.get(this.seeAllProductUrl);
  }

  getProductCategoryWise(category) {
    return this.http.get(`${this.adminProductCategoryUrl}/${category}`);
  }

}
