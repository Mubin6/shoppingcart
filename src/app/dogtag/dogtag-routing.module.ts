import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogtagComponent } from './dogtag/dogtag.component';

const routes: Routes = [
  {
    path: '', component: DogtagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogtagRoutingModule { }
