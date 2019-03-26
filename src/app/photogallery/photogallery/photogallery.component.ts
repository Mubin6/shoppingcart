import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from '../photogallery.service';
import { urlConst } from '../../const';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {
  photoGallery = [];
  img = `${urlConst.baseUrl}/gallery`;
  constructor(
    private photogalleryService: PhotogalleryService
  ) { }

  ngOnInit() {
    this.getAllPhotos();
    // this.photoGallery = [
    //   {image: '/assets/images/customer0.jpg'},
    //   {image: '/assets/images/home-img.jpg'},
    //   {image: '/assets/images/customer1.jpg'},
    //   {image: '/assets/images/customer2.jpg'},
    //   {image: '/assets/images/customer3.jpg'},
    //   {image: '/assets/images/homeImg3.jpg'},
    //   {image: '/assets/images/customer4.jpg'},
    //   {image: '/assets/images/homeImg2.jpg'},
    //   {image: '/assets/images/customer5.jpg'},
    //   {image: '/assets/images/customer6.jpg'},
    //   {image: '/assets/images/customer3.jpg'},
    //   {image: '/assets/images/homeImg3.jpg'},
    //   {image: '/assets/images/customer4.jpg'},
    //   {image: '/assets/images/customer0.jpg'},
    //   {image: '/assets/images/home-img.jpg'},
    //   {image: '/assets/images/customer1.jpg'},
    //   {image: '/assets/images/customer2.jpg'},
    //   {image: '/assets/images/customer3.jpg'},
    //   {image: '/assets/images/homeImg3.jpg'},
    //   {image: '/assets/images/customer4.jpg'},
    //   {image: '/assets/images/homeImg2.jpg'},
    //   {image: '/assets/images/customer5.jpg'},
    //   {image: '/assets/images/customer6.jpg'},
    //   {image: '/assets/images/customer3.jpg'},
    //   {image: '/assets/images/homeImg3.jpg'},
    //   {image: '/assets/images/customer4.jpg'},
    // ];
  }

  getAllPhotos() {

    this.photogalleryService.getAllPhotos().subscribe((allPhotos: Array<Object>) => {
      console.log('allPhotos', allPhotos);
      this.photoGallery = allPhotos;
    });
  }

}
