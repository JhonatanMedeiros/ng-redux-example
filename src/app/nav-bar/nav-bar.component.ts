import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-redux-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  appTitle = 'NgRedux Example';

  constructor() { }

  ngOnInit() {
  }

}
