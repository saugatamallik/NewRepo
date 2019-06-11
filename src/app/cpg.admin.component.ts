import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from './services/user.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'cpg-admin-root',
  templateUrl: './cpg.admin.component.html',
  styleUrls: ['./cpg.admin.component.css']
})
export class CpgAdminComponent {
  public isLogin: boolean;
  public userDetails: object;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    
  }

  ngOnInit() {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/login' || event['url'] == '/') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    });
  }

  private _getUserDetails() {
    this.userDetails =this._userService.getUserDetails();
  }
}
