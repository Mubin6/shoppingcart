import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from './signin.service';
import { Registration } from './signIn';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnChanges {
  public modalForm: FormGroup;
  @Input() public isLoginForm: boolean;
  public title: string;
  private registerBody: Registration;
  @Output () closeModal: EventEmitter<any> = new EventEmitter<any>();
  isForgotPassword = false;
  notlogin: boolean;
  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    /* this.createForm();
    this.registerBody  = this.registrationDomain() as Registration; */
  }
  ngOnChanges() {
    console.log('this.isLoginForm', this.isLoginForm);
    if (this.isLoginForm) {
      this.title = 'Login';
      this.isForgotPassword = false;
      console.log('this.title', this.title);
    } else {
      this.title = 'Registration';
      this.isForgotPassword = false;
      console.log('this.title', this.title);
    }
    this.registerBody  = {} as Registration;
    this.createForm();
  }


  createForm() {
    this.modalForm = this.fb.group({
      loginEmail: ['', Validators.email],
      loginPassword: [''],
      name: [''],
      registerEmail: ['', Validators.email],
      registerPassword: [''],
      forgotPassword: ['', Validators.email]
    });
    this.modalForm.controls.loginEmail.statusChanges.subscribe(sts => {
      console.log('sts_login', sts);
      this.modalForm.controls.loginPassword.setValidators(Validators.compose([Validators.required, Validators.minLength(3)]));
      this.modalForm.controls.forgotPassword.clearValidators();
      this.modalForm.controls.registerEmail.clearValidators();
      console.log('this.modalForm.controls_LOGIN', this.modalForm.controls);
    });
    this.modalForm.controls.registerEmail.statusChanges.subscribe(sts => {
      console.log('sts_register', sts);
      this.modalForm.controls.name.setValidators(Validators.compose([Validators.required, Validators.minLength(2)]));
      this.modalForm.controls.registerPassword.setValidators(Validators.compose([Validators.required, Validators.minLength(3)]));
      this.modalForm.controls.forgotPassword.clearValidators();
      this.modalForm.controls.loginEmail.clearValidators();
      console.log('this.modalForm.controls_REGISTER', this.modalForm.controls);
    });
  }

  login() {
    const email = this.modalForm.value.loginEmail;
    const password = this.modalForm.value.loginPassword;
    console.log('this.modalForm.controls.loginEmail.valid', this.modalForm);
    if (this.modalForm.controls.loginEmail.valid && this.modalForm.controls.loginPassword.valid) {
      console.log('this.modalForm==>', this.modalForm);
      this.notlogin = false;
      this.signinService.getLogin(email, password).subscribe(loginRes => {
        console.log('loginRes', loginRes);
        if (loginRes) {
          this.localStorageService.set('userInfo', loginRes['msg']);
          localStorage.setItem('token', loginRes['token']);
          this.signinService.isUserInfo.next(loginRes['msg']);
          this.toastr.success('You logged in successfully!', 'SUCCESS');
          this.close();
        }
      }, err => {
        console.log('err[\'error\'][\'text\']', err['error']['text']);
        if (err['error']['text'] === 'Password is incorrect') {
          this.toastr.error('Incorrect email or password', 'ERROR');
        } else {
          this.toastr.error('Please Register', 'ERROR');
        }
      }
      );
    } else {
     console.log('Please fill form');
     this.toastr.error('All fields are mandetory', 'ERROR');
    }
  }
  registerForm() {
    console.log('Enter');
    this.registerBody.name = this.modalForm.value.name;
    this.registerBody.emailid = this.modalForm.value.registerEmail;
    this.registerBody.pwd = this.modalForm.value.registerPassword;
    // console.log('this.registerBody', this.registerBody);
    if (this.modalForm.controls.name.valid &&
      this.modalForm.controls.registerEmail.valid &&
      this.modalForm.controls.registerPassword.valid) {
        console.log('this.modalForm', this.modalForm);
        console.log('register form valid');
      this.signinService.saveRegisteration(this.registerBody).subscribe((registerRes: string) => {
        if (registerRes) {
          this.close();
          this.toastr.success('Your account is created successfully!!!', 'SUCCESS');
        }
      }, err => {
        console.log('err[\'error\']', err['error']);
        this.toastr.info(`${err['error']['text']}`, 'Info');
      }
      );
    } else {
      console.log('Please fill required fields');
      this.toastr.error('All fields are mandetory', 'ERROR');
    }
  }

  gotoforgotPassword() {
    this.isForgotPassword = true;
    this.isLoginForm = false;
    this.title = 'Forgot Password';
    this.modalForm.controls.registerEmail.clearValidators();
    this.modalForm.controls.loginEmail.clearValidators();
  }
  gotoLogin() {
    this.isLoginForm = true;
    this.isForgotPassword = false;
    this.title = 'Login';
  }

  forgotPassword(forgotPassword) {
  console.log('forgotPassword', forgotPassword);
  if (this.modalForm.controls.forgotPassword.valid) {
    console.log('this.modalForm----', this.modalForm);
    this.signinService.forgotPassword(forgotPassword).subscribe(forgotRes => {
      console.log('forgotRes', forgotRes);
      if (forgotRes) {
        this.close();
      }
    });
  } else {
    this.toastr.info('Please provide valid email address', 'INFO');
  }
  }

  close() {
    this.closeModal.emit(true);
    this.modalForm.reset();
    // this.gotoLogin();
    if (this.isForgotPassword) {
      this.gotoLogin();
    }
  }

}
