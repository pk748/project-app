import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../shared/services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  submitForm(): void {
      for (const i in this.loginForm.controls) {
          this.loginForm.controls[ i ].markAsDirty();
          this.loginForm.controls[ i ].updateValueAndValidity();
      }

      this.router.navigate(['/dashboard/home']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
          userName: [ null, [ Validators.required ] ],
          password: [ null, [ Validators.required ] ]
      });
  }
}   