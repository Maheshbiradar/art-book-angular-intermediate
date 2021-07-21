import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ArtMeterial } from 'src/app/models/art-material-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {
  @ViewChild('name', {static:false}) nameEl: ElementRef;
  @ViewChild('amount', {static:false}) amountEl: ElementRef;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  AddCartItem(event:Event) {
    event.preventDefault();
    const nameVal: String = this.nameEl.nativeElement.value;
    const amountVal: number = this.amountEl.nativeElement.value;
    const artMaterial = new ArtMeterial(nameVal, amountVal);
    this.cartService.addArtMaterial(artMaterial);
  }

}
