import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagdetailModalComponent } from './tagdetail-modal/tagdetail-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '../tags/tags.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    TagdetailModalComponent,
  ],
  exports: [
    TagdetailModalComponent
  ],
  providers: [
    TagsService
  ],
})
export class SharedModule { }
