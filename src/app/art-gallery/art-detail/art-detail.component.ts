import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {
  newSelectedArt: Art;
  id: number;
  
  constructor(private artService: ArtService, 
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.id = +param['id'];4
      this.newSelectedArt = this.artService.getArtFromId(this.id);
    })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
  }

  onAddToCart(){
    this.artService.addArtMaterialsToCart(this.newSelectedArt.artMaterials);
  }

}
