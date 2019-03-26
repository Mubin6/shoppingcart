import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
