import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  arts: Art[];

  constructor(private artService: ArtService) {   
   }

  ngOnInit(): void {
    this.arts = this.artService.getArts();
  }

}
