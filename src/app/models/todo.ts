export class Todo {
  id?: string;
  title?: string;
  assign?: string;
  isDone?: boolean;

  constructor(id?: string, title?: string, assign?: string, isDone?: boolean) {
    this.id = id;
    this.title = title;
    this.assign = assign;
    this.isDone = isDone;
  }
}
