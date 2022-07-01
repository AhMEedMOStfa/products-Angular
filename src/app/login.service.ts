import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  
  isLoggedIn()
  {
    return !!localStorage.getItem('email');
  }
  login(data:any)
  {
    if(data.valid)
    {
      localStorage.setItem('email',data.controls.email.value);
      this.router.navigate(['']);
    }
    else
    {
      alert('fail to login')
      this.router.navigate(['/auth/login']);
    }
  }
}
