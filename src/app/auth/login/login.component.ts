import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  validLogin(data:object)
  {
    console.log(data);
    this.showError = true;
  }

}
