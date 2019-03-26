import { Injectable } from '@angular/core';
import { urlConst } from '../const';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotogalleryService {
  private readonly showAllPhotosUrl = `${urlConst.baseUrl}/showme/PhotoGallery/all`;

  constructor(
    private http: HttpClient
  ) { }

  getAllPhotos() {
    return this.http.get(this.showAllPhotosUrl);
  }

}
