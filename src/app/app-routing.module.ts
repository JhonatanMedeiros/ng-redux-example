/** Angular Imports **/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components Imports **/
import { HomeComponent } from './pages/home/home.component';

/** Routes List **/
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todo', loadChildren: './pages/todo/todo.module#TodoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
