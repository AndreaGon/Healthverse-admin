import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit(){
    this.authService.authUser(this.loginForm.value);
  }

}
