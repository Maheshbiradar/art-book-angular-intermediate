import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() art: Art;
  @Output() selectedArt = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectArt() {
    this.selectedArt.emit();
  }

}
