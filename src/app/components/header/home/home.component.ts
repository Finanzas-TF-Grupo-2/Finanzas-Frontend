import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(){
    console.log('Home');
  }

  ListClient(){
    this.router.navigate(['/clientes']);

  }

  AddClient(){
    this.router.navigate(['/add-cliente']);
  }

}
