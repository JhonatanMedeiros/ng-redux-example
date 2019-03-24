/** Angular Imports **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing Module Import **/
import { TodoRoutingModule } from './todo-routing.module';

/** Components Imports **/
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
