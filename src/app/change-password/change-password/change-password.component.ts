import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ChangePasswordService } from '../change-password.service';
import { ChangePassword } from '../change-password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  changePassModel = {} as ChangePassword;
  constructor(
    private fb: FormBuilder,
    private changePasswordService: ChangePasswordService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  changePassword(form) {
      this.changePassModel.emailid = form.value.currentEmail;
      this.changePassModel.oldpwd = form.value.currentPass;
      this.changePassModel.newpwd = form.value.newPass;
    this.changePasswordService.changePassword(this.changePassModel).subscribe(res => {
      console.log('res', res);
      if (res === 'Your Password is changed') {
        this.changePasswordForm.reset();
      }
    });
  }

  createForm() {
    this.changePasswordForm = this.fb.group({
      currentEmail: ['', Validators.required],
      currentPass: ['', Validators.required],
      newPass: ['', Validators.required],
      // confirmPass: new FormControl('', {
      //   validators: [Validators.required, this.passwordCheck], updateOn: 'blur'
      // }),
    });
  }
  passwordCheck(c: AbstractControl): any {
    if (!c.parent || !c) {
      return;
    }
    const pwd = c.parent.get('newPass');
    const cpwd = c.parent.get('confirmPass');
    if (!pwd || !cpwd) {
      return;
    }
    if (pwd.value !== cpwd.value) {
      return {
        invalid: true
      };
    }
  }

  get cpwd() {
    return this.changePasswordForm.get('confirmPass');
  }

}
