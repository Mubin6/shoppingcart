import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CheckOutDetails } from '../../domainmodel/checkoutDetails';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  orderSummary: CheckOutDetails;
  totalAmt: any;
  user: any;
  name: FormControl = new FormControl('');
  address: FormControl = new FormControl('');
  city: FormControl = new FormControl('');
  state: FormControl = new FormControl('');
  mobile: FormControl = new FormControl('');
  zipcode: FormControl = new FormControl('');

  constructor(
    private localstorageService: LocalStorageService,
  ) { }

  ngOnInit() {
     this.orderSummary = this.localstorageService.get('checkout');
     this.user = this.localstorageService.get('userInfo');
     this.totalAmt = this.orderSummary['totalamount'];
     this.name = new FormControl(this.user['name']);
  }

  saveAddress() {
    this.orderSummary.address1 = this.address.value;
    this.orderSummary.address2 = `${this.city.value}, ${this.state.value}, India-${this.zipcode.value}`;
    this.orderSummary.phoneno = this.mobile.value;
    this.orderSummary.username = this.name.value;
    this.orderSummary.useremailid = this.user['emailid'];
    console.log('this.orderSummary', this.orderSummary);
    this.localstorageService.set('checkout', this.orderSummary);
  }

}
