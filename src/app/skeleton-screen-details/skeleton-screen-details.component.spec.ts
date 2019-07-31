import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonScreenDetailsComponent } from './skeleton-screen-details.component';

describe('SkeletonScreenDetailsComponent', () => {
  let component: SkeletonScreenDetailsComponent;
  let fixture: ComponentFixture<SkeletonScreenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonScreenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonScreenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
