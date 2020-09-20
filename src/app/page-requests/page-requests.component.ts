import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-requests',
  templateUrl: './page-requests.component.html',
  styleUrls: ['./page-requests.component.sass']
})
export class PageRequestsComponent implements OnInit {

  model = new RequestForm(1);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}

export class RequestForm {

  constructor(
    public number_of_servers: number,
  ) { }

}