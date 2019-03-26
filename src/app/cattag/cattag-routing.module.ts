import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CattagComponent } from './cattag/cattag.component';

const routes: Routes = [
  { path: '', component: CattagComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CattagRoutingModule { }
