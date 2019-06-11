import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpg-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

}
