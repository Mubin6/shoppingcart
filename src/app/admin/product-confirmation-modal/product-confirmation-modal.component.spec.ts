import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfirmationModalComponent } from './product-confirmation-modal.component';

describe('ProductConfirmationModalComponent', () => {
  let component: ProductConfirmationModalComponent;
  let fixture: ComponentFixture<ProductConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
