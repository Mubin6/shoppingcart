import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CattagRoutingModule } from './cattag-routing.module';
import { CattagComponent } from './cattag/cattag.component';

@NgModule({
  imports: [
    CommonModule,
    CattagRoutingModule
  ],
  declarations: [CattagComponent]
})
export class CattagModule { }
