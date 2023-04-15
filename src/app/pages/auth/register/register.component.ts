import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errors?:string;
  paswordNotMatch?:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  form:FormGroup=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required,Validators.pattern(/[a-z]/i)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl('',Validators.required)
  })

  submit() {
    if(this.form.controls['password'].value!==this.form.controls['confirmPassword'].value){
      this.errors='configPassword not match to password'
      this.paswordNotMatch=true;
      return
    }
    this.form.markAllAsTouched();
    if(this.form.invalid) return;
    this.authService.register(this.form.value)
    .subscribe({
      next: (d:any)=>{
        this.form.reset()},
      error: (err:Error)=>{
        this.errors=err.message
        this.form.reset()
      }
    })


    }

}
