import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  routeLinks: any = [
    { path: '/', pagename: 'Create Content' },
    { path: '/login', pagename: 'Logout' }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.logout();
  }
}
