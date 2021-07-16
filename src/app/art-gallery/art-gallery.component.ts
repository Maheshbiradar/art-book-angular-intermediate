import { Component, OnInit } from '@angular/core';
import { Art } from './models/art.model';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css']
})
export class ArtGalleryComponent implements OnInit {
  selectedArt: Art;

  constructor() { }

  ngOnInit(): void {
  }

  setArt(art:Art) {
    this.selectedArt = art;
  }

}
