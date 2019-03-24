/** Angular Imports **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** MDB Angular Import **/
import { WavesModule, TableModule, ButtonsModule, IconsModule, CheckboxModule, InputsModule, CardsFreeModule  } from 'angular-bootstrap-md';

/** Routing Module Import **/
import { TodoRoutingModule } from './todo-routing.module';

/** Store Module Import **/
import { TodoStoreModule } from './store/todo-store.module';

/** Components Imports **/
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { TodoService } from './services/todo.service';

const MD_ANGULAR_IMPORTS: any[] = [
  WavesModule,
  TableModule,
  ButtonsModule,
  IconsModule,
  CheckboxModule,
  InputsModule,
  CardsFreeModule
];

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    TodoStoreModule,
    ...MD_ANGULAR_IMPORTS
  ],
  providers: [TodoService]
})
export class TodoModule { }
