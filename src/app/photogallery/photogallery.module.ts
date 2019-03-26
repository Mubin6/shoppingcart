import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotogalleryRoutingModule } from './photogallery-routing.module';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { PhotogalleryService } from './photogallery.service';

@NgModule({
  imports: [
    CommonModule,
    PhotogalleryRoutingModule
  ],
  declarations: [PhotogalleryComponent],
  providers: [PhotogalleryService]
})
export class PhotogalleryModule { }
