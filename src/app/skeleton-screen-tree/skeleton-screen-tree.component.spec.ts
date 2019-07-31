import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonScreenTreeComponent } from './skeleton-screen-tree.component';

describe('SkeletonScreenTreeComponent', () => {
  let component: SkeletonScreenTreeComponent;
  let fixture: ComponentFixture<SkeletonScreenTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonScreenTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonScreenTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
