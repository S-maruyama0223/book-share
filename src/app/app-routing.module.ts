import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularSampleComponent } from './angular-sample/angular-sample.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: AngularSampleComponent },
  { path: 'book-registration', component: BookRegistrationComponent },
  { path: '', component: AngularSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
