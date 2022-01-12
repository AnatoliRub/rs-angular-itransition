import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringCriteriaComponent } from './filtering-criteria.component';

describe('FilteringCriteriaComponent', () => {
  let component: FilteringCriteriaComponent;
  let fixture: ComponentFixture<FilteringCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteringCriteriaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
