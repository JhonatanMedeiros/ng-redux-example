/** Angular Imports **/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components Imports **/
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

/** Routes List **/
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
