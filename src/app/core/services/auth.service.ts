import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  getAuthStatus(){
    return this.isLoggedIn.value;
  }

  authUser(creds: any){
    if (creds.username == "admin" && creds.password == "admin") {
      this.login();
    }
  }

  login(){
    this.isLoggedIn.next(true);
    this.router.navigate(['/']);
  }

  logout(){
    this.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }

}
