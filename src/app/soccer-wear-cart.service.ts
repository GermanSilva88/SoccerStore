import { Injectable } from '@angular/core';
import { Soccerwear } from './soccer-list/Soccerwear';
import { BehaviorSubject } from 'rxjs';

/**Maneja la logica del carrito */

@Injectable({
  providedIn: 'root'
})

export class SoccerWearCartService {

  private _cartList: Soccerwear[] = [];
  cartList: BehaviorSubject<Soccerwear[]> = new BehaviorSubject<Soccerwear[]>([]);
                                            
  constructor() { }

  addToCart(soccerwear: Soccerwear) {
    let item: Soccerwear | undefined = this._cartList.find((v1) => v1.equipo == soccerwear.equipo)
    if(!item) {
      this._cartList.push({ ... soccerwear});
    } else{
      item.quantity += soccerwear.quantity;
    }
    
    console.log(this._cartList);
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }
  
}
