import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path: 'billddetail/:id', component: BilldetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
