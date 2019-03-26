import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagdetailModalComponent } from './tagdetail-modal.component';

describe('TagdetailModalComponent', () => {
  let component: TagdetailModalComponent;
  let fixture: ComponentFixture<TagdetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagdetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagdetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
