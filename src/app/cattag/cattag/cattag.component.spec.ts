import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattagComponent } from './cattag.component';

describe('CattagComponent', () => {
  let component: CattagComponent;
  let fixture: ComponentFixture<CattagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
