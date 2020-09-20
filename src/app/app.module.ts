import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { CustomHomeComponent } from './custom-home/custom-home.component';
import { PageRequestsComponent } from './page-requests/page-requests.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    CustomHomeComponent,
    PageRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
