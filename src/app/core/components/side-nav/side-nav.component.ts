import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  routeLinks: any = [
    { path: '/', pagename: 'Create Content', id: 0 },
    { path: '/login', pagename: 'Logout', id: 1 }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logout();
  }
}
