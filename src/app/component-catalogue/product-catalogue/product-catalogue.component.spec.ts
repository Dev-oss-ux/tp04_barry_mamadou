import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogueComponent } from './product-catalogue.component';

describe('ProductCatalogueComponent', () => {
  let component: ProductCatalogueComponent;
  let fixture: ComponentFixture<ProductCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
