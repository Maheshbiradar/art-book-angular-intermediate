import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  @Output() artWasSelected = new EventEmitter<Art>();

  arts: Art[] = [
    new Art("Test1 Art", "This is test description", "https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c"),
    new Art("Test2 Art", "This is test description", "https://www.graphicsprings.com/filestorage/stencils/1f4e948fcfc9977ee6fb567bd815132d.png?width=500&height=500"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onArtSeleted(art: Art) {
    this.artWasSelected.emit(art);
  }

}
