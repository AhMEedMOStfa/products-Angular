import { Component, OnInit } from '@angular/core';
import { LoginGuard } from 'src/app/login.guard';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError:boolean = false
  constructor(private loginGuard:LoginGuard , private loginService:LoginService) { }

  ngOnInit(): void {
  }
  validLogin(data:object)
  {
    console.log(data);
    this.showError = true;
  }

  loginFn(data:object)
  {
    this.loginService.login(data);
  }

}
