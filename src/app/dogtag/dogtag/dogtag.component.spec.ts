import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtagComponent } from './dogtag.component';

describe('DogtagComponent', () => {
  let component: DogtagComponent;
  let fixture: ComponentFixture<DogtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
