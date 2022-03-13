import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AngularSampleComponent } from './angular-sample/angular-sample.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AngularSampleComponent, BookRegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
