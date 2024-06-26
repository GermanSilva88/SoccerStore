import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  constructor(){

  }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {

  }

upQuantity(): void {
  if (this.quantity < this.max){
    this.quantity++;
  this.quantityChange.emit(this.quantity);
}
else{
  this.maxReached.emit("se alcanzo el max");
}
}

downQuantity(): void {
  if (this.quantity > 0)
    this.quantity--;
  this.quantityChange.emit(this.quantity);
}

changeQuantity(event: KeyboardEvent): void {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = Number(inputElement.value);

  if (inputValue > this.max) {
    inputElement.value = this.max.toString();
  }
  this.quantityChange.emit(this.quantity);

}
}
