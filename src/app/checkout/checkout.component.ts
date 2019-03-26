import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CheckoutService } from './checkout.service';
import { SendMail } from '../domainmodel/sendmail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 public isLinear = false;
  orderSummary: any;
  totalAmt: any;
  sentMail = {} as SendMail;
  constructor(
    private localstorageService: LocalStorageService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  ngOnInit() {
    this.orderSummary = this.localstorageService.get('checkout');
    this.totalAmt = this.orderSummary['totalamount'];
  }

  placeOrder() {
    this.orderSummary = this.localstorageService.get('checkout');
    this.orderSummary.status = 'received';
    console.log('this.orderSummary', this.orderSummary);
    this.checkoutService.saveCheckOut(this.orderSummary).subscribe(orderRes => {
      console.log('orderRes', orderRes);
      if (orderRes) {
        const prodInfo = [];
        // orderRes['msg']['products'].forEach(elt => {
        //   prodInfo.push({name: elt['name'], price: elt['price']});
        // });
        this.sentMail.mailTO = orderRes['msg']['useremailid'];
        this.sentMail.subject = 'We are working on your order...';
        this.sentMail.textinfo = `TOTALAMT-${orderRes['msg']['totalamount']}`;
        console.log('this.sentMail', this.sentMail);
        this.sendMail(this.sentMail);
      }
    });
  }

  sendMail(mailBody) {
    this.checkoutService.sendMail(mailBody).subscribe(sentMailRes => {
      console.log('sentMailRes', sentMailRes);
      if (sentMailRes) {
        this.router.navigate(['/checkout/orderreceived']);
      }
    });
  }

}
