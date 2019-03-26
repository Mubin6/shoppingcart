import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartlayoutComponent } from './cartlayout.component';

describe('CartlayoutComponent', () => {
  let component: CartlayoutComponent;
  let fixture: ComponentFixture<CartlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
