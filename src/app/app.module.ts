/** Angular Imports **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** External Libs Imports **/
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/** App Routing Module Import **/
import { AppRoutingModule } from './app-routing.module';

/** App Store Module Import **/
import { AppStoreModule } from './store/app-store.module';

/** Components Imports **/
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
