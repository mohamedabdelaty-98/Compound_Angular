import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompoundAdminComponent } from './display-compound-admin.component';

describe('DisplayCompoundAdminComponent', () => {
  let component: DisplayCompoundAdminComponent;
  let fixture: ComponentFixture<DisplayCompoundAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCompoundAdminComponent]
    });
    fixture = TestBed.createComponent(DisplayCompoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
