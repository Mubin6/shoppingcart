import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.scss']
})
export class BilldetailsComponent implements OnInit {
  tableHeading = ['Sr.No', 'Product Name', 'Product Price', 'Product Quantity', 'Product Total'];
  tagHeading = ['Sr.No', 'Product Name', 'Front Name', 'Front Design', 'Back Name', 'Back Info'];
  billDetail: Object;
  products: any;
  invDate: string;
  constructor(
    private adminService: AdminService,
    private  activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log('param', param['id']);
      this.getBillDetails(param['id']);
    });
  }

  getBillDetails(id) {
    this.adminService.getBillDetail(id).subscribe(bill => {
      console.log('bill', bill);
      if (bill) {
        this.billDetail = bill['msg'];
        this.products = this.billDetail['products'];
        this.invDate = `${this.billDetail['created_date']['dayOfMonth']}/${this.billDetail['created_date']['monthValue']}/${this.billDetail['created_date']['year']}`;
      }
    });
  }

}
