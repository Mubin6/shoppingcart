import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CheckOutDetails } from '../../domainmodel/checkoutDetails';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.scss']
})
export class PaymentOptionComponent implements OnInit {
  orderSummary: CheckOutDetails;

  constructor(
    private localstorageService: LocalStorageService,
    private checkoutService: CheckoutService,
  ) { }

  ngOnInit() {
  }

  placeOrder() {
    this.orderSummary = this.localstorageService.get('checkout');
    this.orderSummary.status = 'received';
    console.log('this.orderSummary', this.orderSummary);
    this.checkoutService.saveCheckOut(this.orderSummary).subscribe(orderRes => {
      console.log('orderRes', orderRes);
    });
  }

}
