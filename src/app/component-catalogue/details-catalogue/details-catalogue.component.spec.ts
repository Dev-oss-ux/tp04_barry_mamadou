import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCatalogueComponent } from './details-catalogue.component';

describe('DetailsCatalogueComponent', () => {
  let component: DetailsCatalogueComponent;
  let fixture: ComponentFixture<DetailsCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
