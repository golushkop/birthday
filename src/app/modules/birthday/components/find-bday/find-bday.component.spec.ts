import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBdayComponent } from './find-bday.component';

describe('FindBdayComponent', () => {
  let component: FindBdayComponent;
  let fixture: ComponentFixture<FindBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
