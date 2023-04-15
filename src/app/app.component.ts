import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',

})
export class AppComponent implements OnInit {
  user!:any
  constructor(private authService:AuthService){

    this.user ={
        // firstName: 'beqa',
        // lastName: "eqseulidze",
        // email: "beqa@gmail.com ",
        // password: "123456"
    }

  }


  ngOnInit(): void {
    // this.authService.getUsers().subscribe((users:any)=>console.log(users));
    // this.authService.signUp(this.user).subscribe((a:any)=>console.log(a));
    // this.authService.signIn(this.user).subscribe((users:any)=>console.log(users));
  }
}
