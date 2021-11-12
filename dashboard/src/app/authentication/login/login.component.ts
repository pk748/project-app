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


  // **************************************************************************************************************************************************
  // Variable start
  // **************************************************************************************************************************************************
  error_message = '';
  show_error_message = false;

  signin_email: string = '';
  signin_password: string = '';
  loginForm: FormGroup;

  signin_email_error_message = '';
  signin_email_show_error_message = false;
  signin_email_apply_error = false;

  signin_password_error_message = '';
  signin_password_show_error_message = false;
  signin_password_apply_error = false;

  show_signin_btn = true;
  show_signin_loading_btn = false;

  POOL_DATA;
  userPool;
  redirectURL:any;


  // **************************************************************************************************************************************************
  // constructor start
  // **************************************************************************************************************************************************
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
   
  }
  // **************************************************************************************************************************************************
  // constructor end
  // **************************************************************************************************************************************************



  // **************************************************************************************************************************************************
  // ngOnInit start
  // **************************************************************************************************************************************************
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null],
      password: [null]
    });
  }
  // **************************************************************************************************************************************************
  // ngOnInit end
  // **************************************************************************************************************************************************



  // **************************************************************************************************************************************************
  // validateSignIn start
  // **************************************************************************************************************************************************
  validateSignIn() {
    let is_valid = true;

    if (this.signin_email.trim() === '') {
      this.signin_email_error_message = 'Please enter email.';
      this.signin_email_show_error_message = true;
      this.signin_email_apply_error = true;
      is_valid = false;
    } else if (this.isValidEmail(this.signin_email.trim().toLowerCase()) === false) {
      this.signin_email_error_message = 'Please enter valid email.';
      this.signin_email_show_error_message = true;
      this.signin_email_apply_error = true;
      is_valid = false;
    } else if (this.signin_password.trim() === '') {
      this.signin_password_error_message = 'Please enter password.';
      this.signin_password_show_error_message = true;
      this.signin_password_apply_error = true;
      is_valid = false;
    }

    return is_valid;

  }
  // **************************************************************************************************************************************************
  // validateSignIn end
  // **************************************************************************************************************************************************



  // **************************************************************************************************************************************************
  // isValidEmail start
  // **************************************************************************************************************************************************
  isValidEmail(email) {
    const RegExp = /^((([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\*|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/;
    if (RegExp.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  // **************************************************************************************************************************************************
  // isValidEmail end
  // **************************************************************************************************************************************************



  // **************************************************************************************************************************************************
  // signIn start
  // **************************************************************************************************************************************************
  async signIn() {
    // console.log(Auth)
    const is_valid = this.validateSignIn();

    if (is_valid == true) {

      this.show_signin_btn = false;
      this.show_signin_loading_btn = true;
   
        
      this.router.navigate(['/dashboard/home']);
      
    }
  }
  // **************************************************************************************************************************************************
  // signIn end
  // **************************************************************************************************************************************************


}
