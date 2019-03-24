/** Angular Imports **/
import { NgModule } from '@angular/core';

/** Ngrx Import **/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/** Store Import **/
import { TodoReducer } from './todo-reducer';
import { TodoEffects } from './todo.effects';
import { TodoStoreService } from './todo-store.service';

@NgModule({
  imports: [
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [TodoStoreService]
})
export class TodoStoreModule {}
