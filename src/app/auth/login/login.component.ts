import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }

  checkCred(form) {
    let email = form.email;
    let pass = form['password'];
    if (email === 'admin' && pass === 'admin') {
      console.log('true');
      this.router.navigate(['/home']);
    } else {
      this.toastr.error(`Invalid email or passsword.`);
    }
  }

  onLogin() {
    debugger;
    let form = this.loginForm.value
    this.checkCred(form);
  }

}
