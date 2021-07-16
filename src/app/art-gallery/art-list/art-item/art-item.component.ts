import { Component, Input, OnInit} from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() art: Art;
  constructor(private artService: ArtService) { }

  ngOnInit(): void {
  }

  onSelectArt() {
    this.artService.selectedArt.emit(this.art);
  }

}
