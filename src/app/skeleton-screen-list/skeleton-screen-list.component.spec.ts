import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonScreenListComponent } from './skeleton-screen-list.component';

describe('SkeletonScreenListComponent', () => {
  let component: SkeletonScreenListComponent;
  let fixture: ComponentFixture<SkeletonScreenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonScreenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
