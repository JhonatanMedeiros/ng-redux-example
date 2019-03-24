import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'ng-redux-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  todoState = 'Creating Todo';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  createTodo(): void {
    const todo: Todo = {
      id: 2,
      isDone: false,
      assign: 'User Name',
      title: 'Creating todo'
    };
    this.todoService.createTodo(todo)
      .subscribe(res => {
        console.log(res);
      });
  }

}
