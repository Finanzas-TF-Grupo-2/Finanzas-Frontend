import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  onLogin():void{
    if (this.username === 'CrediBarrio' && this.password === 'credibarrio123') {
    this.router.navigate(['/home']);
  }else {
    
    alert('Nombre de usuario o contraseña incorrectos');
  }
  
}
}