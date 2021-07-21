import { Component, Input, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {
  @Input() newSelectedArt: Art;
  
  constructor(private artService: ArtService) { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.artService.addArtMaterialsToCart(this.newSelectedArt.artMaterials);
  }

}
