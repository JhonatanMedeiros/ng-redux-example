/** Angular Imports **/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Model Import **/
import { Todo } from '../../../models/todo';

/** Store Import **/
import { TodoStoreService } from '../store/todo-store.service';

@Component({
  selector: 'ng-redux-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  todoState = 'Creating Todo';

  constructor(
    private todoStoreService: TodoStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.todoState = 'Edit Todo';
        const id = params['id'];
        this.getTodo(id);
      } else {
        this.todoState = 'Creating Todo';
      }
    });
  }

  getTodo(id: string) {
    console.log(id);
  }

  createTodo(): void {
    const todo = new Todo('', 'Creating todo', 'Jhonatan', false);
    this.todoStoreService.dispatchCreateAction(todo);
  }

}
