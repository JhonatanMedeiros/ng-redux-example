/** Angular Imports **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** External Libs Imports **/
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/** App Routing Module Import **/
import { AppRoutingModule } from './app-routing.module';

/** Components Imports **/
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';

/** Reducer Import **/
import { metaReducers, reducers } from './store/reducers';

/** Environment Import **/
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
