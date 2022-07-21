import { NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  currentRoute = '';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.currentRoute = val.url;
      }
    });
  }
}
