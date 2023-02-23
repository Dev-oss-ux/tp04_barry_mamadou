import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mushroom } from '../../core/model/mushroom';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogueService } from '../catalogue.service';
import { DetailsCatalogueComponent } from '../details-catalogue/details-catalogue.component';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {

  constructor(public tsCatalogue: CatalogueService, private details: DetailsCatalogueComponent) { }



  catalogue$: Observable<Mushroom[]>;
  uniqueData$: Observable<String[]>;


  formSearchText = new FormGroup({
    nameFilter: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z]*'),
    ]),
    toxicityFilter: new FormControl('', [Validators.required]),
  });

  formChoiceEdible: FormGroup = new FormGroup({
    edibleFilter: new FormControl('')
  });

  formChoiceToxicity: FormGroup = new FormGroup({
    toxicityFilter: new FormControl('')
  });

  quickAddMushroomToStore(mushroom: Mushroom) : void {
    this.details.addMushroomToStore(mushroom);
  }

  ngOnInit(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue();
    this.uniqueData$ = this.tsCatalogue.getCatalogueDistinctTypeToxicity();
  }


  doFilterMushroomEdible(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(

          mushroom => {
            let boolFilter = false;
            if (this.formChoiceEdible.value.edibleFilter === 'Yes') {
              boolFilter = mushroom.edible.valueOf() === true;

            }
            else if(this.formChoiceEdible.value.edibleFilter === 'No') {
              boolFilter = mushroom.edible.valueOf() === false;
            }
            else {
              boolFilter = true;
            }

            return boolFilter;
          })));
  }

  doFilterMushroomName(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(

          mushroom => {
            let boolFilter = false;
            if (this.formSearchText.value.nameFilter != '') {
              boolFilter = mushroom.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(this.formSearchText.value.nameFilter.toLowerCase()) > -1;

            }
              else {
              boolFilter = true;
            }

            return boolFilter;
          })));
  }

  doFilterDistinctToxicity(): void {
    this.catalogue$ = this.tsCatalogue.getCatalogue().pipe(
      map((
        listProducts: Mushroom[]) => listProducts.filter(
          mushroom => {
            let boolFilter = false;
            console.log(this.formChoiceToxicity.value.toxicityFilter.valueOf().length);
            if(this.formChoiceToxicity.value.toxicityFilter.valueOf().length !== 0) {
              boolFilter =  this.formChoiceToxicity.value.toxicityFilter.valueOf().includes(mushroom.toxicity.valueOf());
            }
            else {
              boolFilter = true;
            }

            return boolFilter;

          })));

  }




}
