import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddEditModalComponent } from './product-add-edit-modal.component';

describe('ProductAddEditModalComponent', () => {
  let component: ProductAddEditModalComponent;
  let fixture: ComponentFixture<ProductAddEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
