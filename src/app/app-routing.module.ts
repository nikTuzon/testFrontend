import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleFrontendComponent } from './sample-frontend/sample-frontend.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SampleFrontendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
