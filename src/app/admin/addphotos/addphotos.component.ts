import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { urlConst } from '../../const';

@Component({
  selector: 'app-addphotos',
  templateUrl: './addphotos.component.html',
  styleUrls: ['./addphotos.component.scss'],
})
export class AddphotosComponent implements OnInit {
  event: any;
  newFile: any;
  reader: FileReader;
  url: any;
  photos: Array<Object>;
  tableHeading = ['Sr.No.', 'FileName', 'Photo', 'Action'];
  img: string;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.adminService.getAllPhotos().subscribe((photoList: Array<Object>) => {
      console.log('photoList', photoList);
      this.photos = photoList;
      this.img = `${urlConst.baseUrl}/gallery`;
    });
  }

  deletePhotos(fileName, idx) {
    this.adminService.deletePhotos(fileName).subscribe(deletedPhoto => {
    console.log('deletedPhoto', deletedPhoto);
    if (deletedPhoto) {
      this.photos.splice(idx, 1);
    }
    });
  }

  readUrl(event: any) {
    this.event = event;
    console.log('this.event', this.event);
    console.log('Okay', event.target.files);
    this.newFile = event.target.files[0];
    console.log('this.newFile', this.newFile);
    console.log('Okay1111', this.newFile.size);
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();

      // tslint:disable-next-line:no-shadowed-variable
      this.reader.onload = (event: any) => {

        this.url = event.target.result;
        console.log('this.url', this.url);
        // localStorage.setItem('url', this.url);
      };
      this.reader.readAsDataURL(event.target.files[0]);
    }
  }
  addPhotos() {
    this.adminService.addPhotos(this.newFile).subscribe(photo => {
    console.log('photo', photo);
    if (photo) {
      this.getAllPhotos();
    }
    });
  }

}
