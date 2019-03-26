import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotogalleryComponent } from './photogallery/photogallery.component';

const routes: Routes = [
  { path: '', component: PhotogalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotogalleryRoutingModule { }
