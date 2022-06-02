import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  currentRoute: string = "";

  constructor(
    private router: Router
  ){
    router.events.subscribe((val) =>{
      if(val instanceof NavigationStart) 
      {

        this.currentRoute = val.url;
      }
    })
  }


  
}
