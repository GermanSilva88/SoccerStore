import { Component } from '@angular/core';
import { SoccerWearCartService } from '../soccer-wear-cart.service';
import { Soccerwear } from '../soccer-list/Soccerwear';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Soccerwear[]>;

  constructor(private cart: SoccerWearCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}


 
