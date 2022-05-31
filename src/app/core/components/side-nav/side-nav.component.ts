import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  routeLinks: any = [
    {path: "/", pagename: "Create Content"},
    {path: "/login", pagename: "Logout"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
