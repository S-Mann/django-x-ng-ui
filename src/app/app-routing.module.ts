import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomHomeComponent } from './custom-home/custom-home.component';
import { PageRequestsComponent } from './page-requests/page-requests.component';

const routes: Routes = [
  { path: '', component: CustomHomeComponent },
  { path: 'requests', component: PageRequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
