import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { CatalogueService } from '../catalogue.service';
import { Mushroom } from '../../core/model/mushroom';
import { AddMushroom } from 'src/app/core/model/store';

@Component({
  selector: 'app-details-catalogue',
  templateUrl: './details-catalogue.component.html',
  styleUrls: ['./details-catalogue.component.css']
})



export class DetailsCatalogueComponent implements OnInit {

  mushroom: Mushroom | undefined;
  constructor(private mushService: CatalogueService, private route: ActivatedRoute, private store: Store) { } 

  ngOnInit(): void {
    
    this.mushService.getCatalogue().subscribe(
      data => {
        this.mushroom = data.find(p => p.id == this.route.snapshot.params['id']);
      }
    );
    console.log(this.mushroom);
  }

  addMushroomToStore(mushroom: Mushroom) : void {
    this.store.dispatch(new AddMushroom(mushroom));
  }

}
