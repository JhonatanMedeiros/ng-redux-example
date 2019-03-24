import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-redux-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headElements = ['ID', 'Title', 'Assign', 'Action'];

  todoList: any = [
    { id: 1, title: 'Create todo app', assign: 'Jhonatan'},
    { id: 2, title: 'Create todo app', assign: 'Jhonatan'},
    { id: 3, title: 'Create todo app', assign: 'Jhonatan'},
    { id: 4, title: 'Create todo app', assign: 'Jhonatan'},
    { id: 5, title: 'Create todo app', assign: 'Jhonatan'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
