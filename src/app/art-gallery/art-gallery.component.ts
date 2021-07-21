import { Component, OnInit } from '@angular/core';
import { ArtService } from '../services/art.service';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css'],
  providers: [ArtService]
})
export class ArtGalleryComponent implements OnInit {
  selectedArt: Art;

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.artService.selectedArt.subscribe((art: Art) => {
      this.selectedArt = art;
    })
  }
}
