/** Angular Imports **/
import { Component, OnInit } from '@angular/core';

/** Rxjs Import **/
import { Observable } from 'rxjs';

/** Service Import **/
import { TodoStoreService } from '../store/todo-store.service';

/** Model Import **/
import { Todo } from '../../../models/todo';

@Component({
  selector: 'ng-redux-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headElements = ['ID', 'Title', 'Assign', 'Action'];

  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private todoStoreService: TodoStoreService) { }

  ngOnInit() {
    this.todoStoreService.dispatchLoadAction();
    this.todos$ = this.todoStoreService.getTodo();
    this.isLoading$ = this.todoStoreService.getIsLoading();
    this.error$ = this.todoStoreService.getError();
  }

  onCreateTodo(todo) {
    this.todoStoreService.dispatchCreateAction(new Todo(todo));
  }

  removeTodo(todo) {
    this.todoStoreService.dispatchRemoveAction(todo);
  }

  onUpdateTodo(event) {
    this.todoStoreService.dispatchUpdateAction(event.updates);
  }

}
