import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CartService } from './cart.service';
import { ProductDetails } from '../domainmodel/productsDetail';
import { CheckOutDetails } from '../domainmodel/checkoutDetails';
import { Router } from '@angular/router';
import { urlConst } from '../const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public total = 0;
  cartItems: any;
  product = {} as ProductDetails;
  checkOut = {} as CheckOutDetails;
  img: string;
  extn: any;
  constructor(
    private localstorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = this.localstorageService.get('cartItem') as ProductDetails;
    // this.localstorageService.remove();
    console.log('this.cartItems', this.cartItems);
    if (this.cartItems !== null) {
      this.cartItems.forEach((element) => {
        this.total += element['price'];
        this.extn = element['filefullpath'].slice(-4);
        if (this.extn === 'jpeg') {
          this.extn = '.jpeg';
        }
        console.log('this.extn', this.extn);
      });
      this.img = `${urlConst.baseUrl}/products`;
    }
  }
  increment(idx) {
    console.log('idx', idx);
    this.cartItems.forEach((element, index) => {
      if (idx === index) {
        element['quantity'] += 1;
        this.total += element['price'];
      }
    });
    // this.localstorageService.set( 'cartItem', this.cartItems);
  }
  decrement(idx) {
    this.cartItems.forEach((element, index) => {
      if (idx === index) {
        if (element['quantity'] > 1) {
          element['quantity'] -= 1;
          this.total -= element['price'];
        } else {
          element['quantity'] = 1;
        }
      }
    });
    // this.localstorageService.set( 'cartItem', this.cartItems);
  }
  removeBtn(index) {
    const price = this.cartItems[index]['price'];
    console.log('price', price);
    console.log('index', index);
    this.cartItems.splice(index, 1);
    this.total -= price;
    console.log('this.total_AfterItemRemove', this.total);
    console.log('this.cartItems', this.cartItems);
    if (this.cartItems !== null) {
      this.localstorageService.set( 'cartItem', this.cartItems);
    }
  }

  placeOrder() {
    this.checkOut.products = this.cartItems;
    this.checkOut.totalamount = this.total;
    console.log('this.checkOut', this.checkOut);
    this.localstorageService.set('checkout', this.checkOut);
    this.router.navigate(['/checkout']);
  }
}


