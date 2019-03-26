import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecardsComponent } from './samplecards.component';

describe('SamplecardsComponent', () => {
  let component: SamplecardsComponent;
  let fixture: ComponentFixture<SamplecardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplecardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
