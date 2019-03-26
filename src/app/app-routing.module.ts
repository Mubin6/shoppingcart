import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartlayoutComponent } from './layout/cartlayout/cartlayout.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { AdminauthGuard } from './adminauth.guard';

const routes: Routes = [
  { path: 'signIn', component: SigninComponent },
  {
    path: '', component: CartlayoutComponent,
    children: [
      {
        path: '', loadChildren: './layout/layout.module#LayoutModule'
      },
      {
        path: 'dogtags', loadChildren: './dogtag/dogtag.module#DogtagModule'
      },
      {
        path: 'cattags', loadChildren: './cattag/cattag.module#CattagModule'
      },
      {
        path: 'photogallery', loadChildren: './photogallery/photogallery.module#PhotogalleryModule'
      },
      {
        path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule'
      },
      {
        path: 'tags', loadChildren: './tags/tags.module#TagsModule'
      },
      {
        path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule', canActivate: [AuthGuard]
      },
      // canActivate: [AuthGuard]
      {
        path: 'cart', loadChildren: './cart/cart.module#CartModule'
      },
      {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'changepassword', loadChildren: './change-password/change-password.module#ChangePasswordModule'
      }
      // canActivate: [AdminauthGuard]
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
