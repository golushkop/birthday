import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAutocompleteFormComponent } from './city-autocomplete-form.component';

describe('CityAutocompleteFormComponent', () => {
  let component: CityAutocompleteFormComponent;
  let fixture: ComponentFixture<CityAutocompleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAutocompleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAutocompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
