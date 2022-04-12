import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularSampleComponent } from './angular-sample/angular-sample.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: AngularSampleComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'register-user', component: UserRegistrationComponent },
  { path: '', component: AngularSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
