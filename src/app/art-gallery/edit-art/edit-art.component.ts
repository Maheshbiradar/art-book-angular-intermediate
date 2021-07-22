import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => { 
        this.id = +params['id'];
        this.editMode = params['id'] != null;
    })
  }

}
