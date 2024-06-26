import { Component, OnInit } from '@angular/core';
import { Soccerwear } from './Soccerwear';
import { SoccerWearCartService } from '../soccer-wear-cart.service';
import { SoccerstoreDataService } from '../soccerstore-data.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-soccer-list',
  templateUrl: './soccer-list.component.html',
  styleUrl: './soccer-list.component.scss'
})
export class SoccerListComponent implements OnInit {

  soccerwears: Soccerwear[] = [];


  constructor(private cart: SoccerWearCartService,
    private soccerDataService: SoccerstoreDataService
  ) { 
  }

  ngOnInit(): void {
    this.soccerDataService.getAll()
    .subscribe(soccerwears => this.soccerwears = soccerwears);
  }

  addToCart(soccerwear : Soccerwear): void{
    this.cart.addToCart(soccerwear);
    soccerwear.stock -= soccerwear.quantity;
    soccerwear.quantity =0;
  }

  maxReached(m: string){
    alert(m);
  }
  
}
