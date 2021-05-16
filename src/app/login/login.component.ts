import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value1 = '';
  value2 = '';

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  getLoginResponse(email: string, password: string): void {
    this.userService.getLoginResponse(email, password).subscribe((data: string) => {
      if (JSON.stringify(data) === 'true') {
        this.router.navigate(['/board']);
      }
    });
  }



}
