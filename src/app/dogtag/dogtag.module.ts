import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogtagRoutingModule } from './dogtag-routing.module';
import { DogtagComponent } from './dogtag/dogtag.component';

@NgModule({
  imports: [
    CommonModule,
    DogtagRoutingModule
  ],
  declarations: [DogtagComponent]
})
export class DogtagModule { }
