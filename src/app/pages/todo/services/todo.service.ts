/** Angular Import **/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/** Model Import **/
import { Todo } from '../../../models/todo';

@Injectable()
export class TodoService {
  private readonly API_TASKS_URL = `http://localhost:3001/todos`;

  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<Todo[]>(this.API_TASKS_URL);
  }

  get(record: Todo) {
    return this.http.get<Todo>(`${this.API_TASKS_URL}/${record.id}`);
  }

  create(record: Todo) {
    return this.http.post<Todo>(this.API_TASKS_URL, record);
  }

  update(record: Todo) {
    return this.http.put<Todo>(`${this.API_TASKS_URL}/${record.id}`, record);
  }

  remove(id: string) {
    return this.http.delete<Todo>(`${this.API_TASKS_URL}/${id}`);
  }
}
