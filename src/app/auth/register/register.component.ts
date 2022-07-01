import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showError:boolean=false;
  registerForm:FormGroup = this.fb.group({
    FullName:['',[Validators.required]],
    Email:['',[Validators.required , Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    UserName:['',[Validators.required , Validators.pattern(/^[^\s]+$/)]],
    Password:['',[Validators.required , Validators.minLength(8) , 
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    ConfirmPassword:['',[Validators.required]],
    addressArray:this.fb.array([])
    },
    {validator:this.checkPasswords('Password','ConfirmPassword')});

  constructor(private fb:FormBuilder) { 
    
  }
  ngOnInit(): void {
  }
  //address form
  get addressData():FormArray
  {
    return this.registerForm.get('addressArray') as FormArray;
  }
  addAddress():FormGroup{
    return this.fb.group({
      address:['',[Validators.required , Validators.pattern(/[^\W][A-Za-z0-9]+/) ]],
      street:['',[Validators.required ,Validators.pattern(/[^\W][A-Za-z0-9]+/) ]],
      city:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      country:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
    })
  }
  
  pushInArray()
  {
    this.addressData.push(this.addAddress());     
  }
  removeAddress(i:number)
  {
    this.addressData.removeAt(i);
  }

  //register form

  get controlValidation()
  {
    return this.registerForm.controls;
  }

  validateRegister(data:object)
  {
    this.showError = true;
  }

  //custom validation for password & confirm password ??
  checkPasswords(password:string , confirmPassword:string)
  {
    return (formgroup:FormGroup)=>
    {
      const pass = formgroup.controls[password];
      const confirmPass = formgroup.controls[confirmPassword];

      if(confirmPass.errors && !confirmPass.errors['checkPasswords'])
      {
        return;
      }
      if(pass.value !== confirmPass.value)
      {
        confirmPass.setErrors({['checkPasswords']: true});
      }
      else
      {
        confirmPass.setErrors(null);
      }
    }
  }
  
}
