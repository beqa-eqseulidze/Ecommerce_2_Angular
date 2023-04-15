import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../interface/interface.register';
import { ISignIn } from '../interface/interface.signIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUsers():any{
    return this.http.get('http://localhost:8080/users')
  }

  register(user:IRegister):any{
    return this.http.post('http://localhost:8080/auth/signup',user)
  }
  signIn(user:ISignIn):any{
    return this.http.post('http://localhost:8080/auth/login',user)
  }

}
