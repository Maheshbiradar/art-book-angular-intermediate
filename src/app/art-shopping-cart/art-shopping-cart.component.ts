import { Component, Input, OnInit } from '@angular/core';
import { ArtMeterial } from '../art-gallery/models/art-material-model';

@Component({
  selector: 'app-art-shopping-cart',
  templateUrl: './art-shopping-cart.component.html',
  styleUrls: ['./art-shopping-cart.component.css']
})
export class ArtShoppingCartComponent implements OnInit {
  artMaterials: ArtMeterial[] = [
    new ArtMeterial("Test1", 300),
    new ArtMeterial("Test2", 600)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onaddCartItemAdded(artMaterial: ArtMeterial) {
    this.artMaterials.push(artMaterial);
  }

}
