import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularSampleComponent } from './angular-sample/angular-sample.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: AngularSampleComponent },
  { path: '', component: AngularSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
