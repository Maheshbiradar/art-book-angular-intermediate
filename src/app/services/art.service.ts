import { EventEmitter, Injectable } from '@angular/core';
import { Art } from '../art-gallery/models/art.model';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  selectedArt =  new EventEmitter<Art>();  
  arts: Art[] = [
    new Art("Test1 Art", "This is test description", "https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c"),
    new Art("Test2 Art", "This is test description", "https://www.graphicsprings.com/filestorage/stencils/1f4e948fcfc9977ee6fb567bd815132d.png?width=500&height=500"),
  ];

  getArts() {
    return this.arts.slice();
  }

  constructor() { }
}
