/** Angular Imports **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** @ngrx Import **/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

/** Reducer Import **/
import { reducers, metaReducers } from './app-reducer';

/** Environment Import **/
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  exports: [StoreModule]
})
export class AppStoreModule { }
