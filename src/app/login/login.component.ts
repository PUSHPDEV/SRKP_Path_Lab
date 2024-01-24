import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  loginObj: any = {
    userName: '',
    // userEmail:'',
    password: ''
  }
  onLogin(){

    if(this.loginObj.userName=="admin" && this.loginObj.password=="1806252"){
this.router.navigateByUrl('/home')

    }else{
      alert('Wrong Credentials')
    }
  }
}
