import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SamplecardsComponent } from './samplecards/samplecards.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent,
    SamplecardsComponent
  ]
})
export class LayoutModule { }
