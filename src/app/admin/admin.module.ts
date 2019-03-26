import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { ProductAddEditModalComponent } from './product-add-edit-modal/product-add-edit-modal.component';
import { ProductConfirmationModalComponent } from './product-confirmation-modal/product-confirmation-modal.component';
import { AdminService } from './admin.service';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddphotosComponent } from './addphotos/addphotos.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import {MatRadioModule} from '@angular/material/radio';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule
  ],
  declarations: [
    AdminComponent,
    ProductAddEditModalComponent,
    ProductConfirmationModalComponent,
    AddproductsComponent,
    AddphotosComponent,
    OrderStatusComponent,
    BilldetailsComponent
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
