import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(){
    console.log('Nabvar');
  }

  Home(){
    this.router.navigate(['/home']);

  }

  AddProduct(){
    this.router.navigate(['/productos']);

  }


}
