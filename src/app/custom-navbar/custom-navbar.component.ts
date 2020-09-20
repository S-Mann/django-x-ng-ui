import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.sass']
})
export class CustomNavbarComponent implements OnInit {

  public isMenuCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
