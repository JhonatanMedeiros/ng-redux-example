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

@NgModule({
  declarations: [
    AppComponent
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
