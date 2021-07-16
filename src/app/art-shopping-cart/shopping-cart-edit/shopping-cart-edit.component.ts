import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ArtMeterial } from 'src/app/art-gallery/models/art-material-model';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {
  @ViewChild('name', {static:false}) nameEl: ElementRef;
  @ViewChild('amount', {static:false}) amountEl: ElementRef;
  @Output() addCartItemAdded = new EventEmitter<ArtMeterial>();

  constructor() { }

  ngOnInit(): void {
  }

  AddCartItem(event:Event) {
    event.preventDefault();
    const nameVal: String = this.nameEl.nativeElement.value;
    const amountVal: number = this.amountEl.nativeElement.value;
    const artMaterial = new ArtMeterial(nameVal, amountVal);

    this.addCartItemAdded.emit(artMaterial);
  }

}
