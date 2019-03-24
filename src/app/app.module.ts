/** Angular Imports **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** External Libs Imports **/
// Angular Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/** App Router Module Import **/
import { AppRoutingModule } from './app-routing.module';

/** Components Imports **/
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
