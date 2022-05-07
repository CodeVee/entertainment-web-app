import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthPage } from 'src/app/models/auth-page.enum';
import { AuthRequest } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { checkPasswords } from 'src/app/validators/password-match.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginPage = false;
  signupPage = false;
  loading = false;
  btnName = '';
  authForm!: FormGroup;
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  passwordCtrl = new FormControl('', Validators.required);
  confirmCtrl = new FormControl('', Validators.required);

  get emailInvalid(): boolean {
    return this.emailCtrl.dirty && this.emailCtrl.touched && this.emailCtrl.invalid;
  }
  get passwordInvalid(): boolean {
    return this.passwordCtrl.dirty && this.passwordCtrl.touched && this.passwordCtrl.invalid;
  }
  get confirmInvalid(): boolean {
    return this.confirmCtrl.dirty && this.confirmCtrl.touched && this.confirmCtrl.invalid;
  }
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private title: Title,
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const page = data.page as string;
      this.loginPage = page === AuthPage.Login;
      this.signupPage = page === AuthPage.Signup;
    });

    if (this.loginPage) {
      this.title.setTitle('Login')
    }

    if (this.signupPage) {
      this.title.setTitle('Sign up')
    }

    this.initializeForm();
  }

  private initializeForm(): void {
    if (this.loginPage) {
      this.authForm = this.fb.group({
        email: this.emailCtrl,
        password: this.passwordCtrl
      });
      this.btnName = 'Login to your account';
    }

    if (this.signupPage) {
      this.authForm = this.fb.group({
        email: this.emailCtrl,
        password: this.passwordCtrl,
        confirmPassword: this.confirmCtrl
      }, { validators: checkPasswords });
      this.btnName = 'Create an account';
    }
  }

  submit(): void {
    const request: AuthRequest = {
      email: this.emailCtrl.value,
      password: this.passwordCtrl.value
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;

      if (this.loginPage) {
        const succeded = this.authService.login(request);

        if (succeded) {
          this.router.navigate(['']);
        }

        if (!succeded) {
          alert('User doesn\'t exist');
        }
      }

      if (this.signupPage) {
        const succeded = this.authService.signup(request);

        if (succeded) {
          this.router.navigate(['/login']);
        }

        if (!succeded) {
          alert('Email already taken');
        }
      }

    }, 3000);

  }

}
