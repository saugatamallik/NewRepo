import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cpg-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public errorMessage: string;

  constructor(
    private _userService : UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    
  }

  public signIn() {
    console.log(this.signInForm.value);
    this._userService.getUserDetails().subscribe(data => {
      if (this.signInForm.value.username === data.username && this.signInForm.value.password === data.password) {
        localStorage.setItem('username', this.signInForm.value.username);
        this._router.navigate(['/manage-users']);
      } else {
        this.errorMessage = 'Please check usename and password';
      }     
    });
  }

}
