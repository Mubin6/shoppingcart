import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

  public tableHeading = [];
  public productList = [];
  public title: string;
  @ViewChild('productModal') productModal;
  @ViewChild('confirmationModal') confirmationModal;
  fileName: any;
  deleteItemIdx: any;
  constructor(
    private renderer: Renderer2,
    private adminService: AdminService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getAllProducts();
    this.tableHeading = ['Sr.No', 'Product Name', 'Action'];
    this.productList = [
      // {
      //   imageName: `/assets/images/defaultImg.jpg`,
      //   productName: 'product7',
      //   productId: '7546qw66',
      //   productCount: 19,
      // }
    ];
  }

  getAllProducts() {
    this.adminService.getAllProduct().subscribe((productList: Array<any>) => {
      console.log('productList', productList);
      this.productList = productList;
    });
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

openProductModal(title) {
  console.log('parenttitle', title);
  this.title = title;
  const dialogRef = this.renderer.selectRootElement(this.productModal);
    dialogRef.show();
}
closeProductModal(event) {
  const dialogRef = this.renderer.selectRootElement(this.productModal);
  dialogRef.hide();
}
openConfirmationModal(fileName, idx) {
  this.deleteItemIdx = idx;
  this.fileName = fileName;
  const dialogRef = this.renderer.selectRootElement(this.confirmationModal);
    dialogRef.show();
}
closeConfirmationModal(event) {
  console.log('event', event);
  console.log('event Type', typeof event);
  const dialogRef = this.renderer.selectRootElement(this.confirmationModal);
  dialogRef.hide();
  if (typeof event !== 'boolean') {
    this.productList.splice(this.deleteItemIdx, 1);
  }
}
callGetProdService(event) {
  if (event) {
    this.getAllProducts();
  }
}

}
