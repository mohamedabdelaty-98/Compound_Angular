import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarksCompoundAdminComponent } from './landmarks-compound-admin.component';

describe('LandmarksCompoundAdminComponent', () => {
  let component: LandmarksCompoundAdminComponent;
  let fixture: ComponentFixture<LandmarksCompoundAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandmarksCompoundAdminComponent]
    });
    fixture = TestBed.createComponent(LandmarksCompoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
