import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { urlConst } from '../../const';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orderSummary: any;
  cartProducts: any;
  extn: any;
  img: string;
  constructor(
    private localstorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.orderSummary = this.localstorageService.get('checkout');
    console.log('this.orderSummary', this.orderSummary);
    this.cartProducts = this.orderSummary['products'];
    console.log('this.cartProducts', this.cartProducts);
    if (this.cartProducts !== null) {
      this.cartProducts.forEach((element) => {
        this.extn = element['filefullpath'].slice(-4);
        if (this.extn === 'jpeg') {
          this.extn = '.jpeg';
        }
        console.log('this.extn', this.extn);
      });
      this.img = `${urlConst.baseUrl}/products`;
    }
  }




}
