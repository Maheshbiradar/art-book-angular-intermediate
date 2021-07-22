import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  arts: Art[];

  constructor(private artService: ArtService, private router: Router,
     private activatedRoute: ActivatedRoute) {   
   }

  ngOnInit(): void {
    this.arts = this.artService.getArts();
  }

  onNewArt() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}
