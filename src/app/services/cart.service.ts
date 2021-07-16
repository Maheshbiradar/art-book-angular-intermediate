import { EventEmitter, Injectable } from '@angular/core';
import { ArtMeterial } from '../art-gallery/models/art-material-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  artMaterialsChanged =  new EventEmitter<ArtMeterial[]>();
  artMaterials: ArtMeterial[] = [
    new ArtMeterial("Test1", 300),
    new ArtMeterial("Test2", 600)
  ];

  constructor() { }

  addArtMaterial(artMeterial: ArtMeterial) {
    this.artMaterials.push(artMeterial);
    this.artMaterialsChanged.emit(this.artMaterials.slice());
  }

  getArtMaterials() {
    return this.artMaterials.slice();
  }
}
