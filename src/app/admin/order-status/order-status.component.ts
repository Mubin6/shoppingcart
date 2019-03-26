import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  public sts = 'received';
  public orderSts = [];
  public tableHeading = ['Order No.', 'UserName', 'UserMailId', 'Mobile No.', 'Total Amount', 'Bill Detail'];
  constructor(
    private  adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOrderDetail(this.sts);
  }

  getOrderDetail(sts) {
    this.adminService.getOrderDetail(sts).subscribe((status: Array<object>) => {
      console.log('status', status);
      this.orderSts = status;
    });
  }

  selectedBtn(event) {
  console.log('event', event);
  this.sts = event['value'];
  console.log('this.sts', this.sts);
  this.getOrderDetail(this.sts);
  }

  statusOrderDetail(prodId, idx) {
    this.adminService.statusOrderDetail(prodId).subscribe(sts => {
      console.log('sts', sts);
      if (sts !== 'Order not found!') {
        this.orderSts.splice(idx, 1);
      }
    });
  }
  billDetailDetail(prodId) {
    this.router.navigate([`admin/billddetail/${prodId}`]);
  }

}
