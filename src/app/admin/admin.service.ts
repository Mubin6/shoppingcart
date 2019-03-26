import { Injectable } from '@angular/core';
import { urlConst } from '../const';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdminService {
  private readonly adminAddProductUrl = `${urlConst.baseUrl}/secured/api/fileupload`;
  private readonly adminDeleteProductUrl = `${urlConst.baseUrl}/secured/products`;
  private readonly adminSeeAllProductUrl = `${urlConst.baseUrl}/showme/all`;
  private readonly adminAddPhotosUrl = `${urlConst.baseUrl}/secured/api/PhotoGallery`;
  private readonly adminDeletePhotoUrl = `${urlConst.baseUrl}/secured/api/PhotoGallery`;
  private readonly adminShowAllPhotosUrl = `${urlConst.baseUrl}/showme/PhotoGallery/all`;
  private readonly adminBillDetailUrl = `${urlConst.baseUrl}/billdetail/get`;
  private readonly adminOrderDetailUrl = `${urlConst.baseUrl}/orderdetail/get`;
  private readonly adminStatusOrderDetailUrl = `${urlConst.baseUrl}/secured/orderdetail/put`;
  constructor(
    private http: HttpClient,
  ) { }

  addProducts(file, price, size, prod_info, category) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('size', size);
    formData.append('prod_info', prod_info);
    formData.append('category', category);
    return this.http.post(this.adminAddProductUrl, formData, {
      // headers: new HttpHeaders().set('Content-type', 'application/json'),
      responseType: 'text'
    }
    );
  }
  addPhotos(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.adminAddPhotosUrl, formData, {
      // headers: new HttpHeaders().set('Content-type', 'application/json'),
      responseType: 'text'
    }
    );
  }
  deleteProducts(filename) {
    return this.http.delete(`${this.adminDeleteProductUrl}/${filename}`, {
      responseType: 'text'
    });
  }
  deletePhotos(filename) {
    return this.http.delete(`${this.adminDeletePhotoUrl}/${filename}`, {
      responseType: 'text'
    });
  }
  getAllProduct() {
    return this.http.get(this.adminSeeAllProductUrl);
  }
  getAllPhotos() {
    return this.http.get(this.adminShowAllPhotosUrl);
  }

  getBillDetail(id) {
    return this.http.get(`${this.adminBillDetailUrl}/${id}`);
  }

  getOrderDetail(status) {
    return this.http.get(`${this.adminOrderDetailUrl}/${status}`);
  }

  statusOrderDetail(id) {
    return this.http.put(`${this.adminStatusOrderDetailUrl}/${id}`, {}, {
      responseType: 'text'
    });
  }

}
