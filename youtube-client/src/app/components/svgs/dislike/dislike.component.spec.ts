import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeComponent } from './dislike.component';

describe('DislikeComponent', () => {
  let component: DislikeComponent;
  let fixture: ComponentFixture<DislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
