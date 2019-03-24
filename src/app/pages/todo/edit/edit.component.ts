import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-redux-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  todoState = 'Creating Todo';

  constructor() { }

  ngOnInit() {
  }

}
