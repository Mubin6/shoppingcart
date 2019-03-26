import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { SigninService } from '../signin/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('signInform') public signInForm;
  public user: any;
  public isLoginForm: boolean;
  constructor(
    private renderer: Renderer2,
    private localStorageService: LocalStorageService,
    private signinService: SigninService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('this.signinService.isLogin()', this.signinService.isLogin());
    if (this.signinService.isLogin()) {
      this.user = this.localStorageService.get('userInfo');
      console.log('this.user', this.user);
    }
    console.log('this.user', this.user);
    this.signinService.isUserInfo.subscribe(res => {
      console.log('res', res);
      this.user = res;
      console.log('this.user_Replay', this.user);
    });
  }

  openForm(formVal) {
    console.log('formVal', formVal);
    this.isLoginForm = formVal;
      const dialogRef = this.renderer.selectRootElement(this.signInForm);
      dialogRef.show();
  }

  closeForm(event) {
    console.log('event', event);
    if (event) {
      const dialogRef = this.renderer.selectRootElement(this.signInForm);
      dialogRef.hide();
    }
  }
  logOut() {
    this.signinService.logout();
    this.router.navigate(['']);
  }

}
