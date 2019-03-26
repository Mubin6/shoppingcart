import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartlayoutComponent } from './layout/cartlayout/cartlayout.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from './components/signin/signin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AdminauthGuard } from './adminauth.guard';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CartlayoutComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    SigninService,
    AuthGuard,
    AdminauthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
