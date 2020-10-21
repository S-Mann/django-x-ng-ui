import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomHomeComponent } from './custom-home/custom-home.component';
import { PageRequestsComponent } from './page-requests/page-requests.component';
import { MetricsDashboardComponent } from './metrics-dashboard/metrics-dashboard.component';

const routes: Routes = [
  { path: '', component: CustomHomeComponent },
  { path: 'requests', component: PageRequestsComponent },
  { path: 'metrics', component: MetricsDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
