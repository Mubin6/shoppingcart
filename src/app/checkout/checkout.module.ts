import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from './checkout.service';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckoutRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [
    CheckoutComponent,
    DeliveryAddressComponent,
    OrderSummaryComponent,
    PaymentOptionComponent,
    OrderConfirmationComponent
  ],
  providers: [
    CheckoutService
  ]
})
export class CheckoutModule { }
