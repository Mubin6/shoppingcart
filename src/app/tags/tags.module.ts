import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    TagsRoutingModule,
    MatTooltipModule,
    MatMenuModule,
    SharedModule
  ],
  declarations: [TagsComponent],
})
export class TagsModule { }
