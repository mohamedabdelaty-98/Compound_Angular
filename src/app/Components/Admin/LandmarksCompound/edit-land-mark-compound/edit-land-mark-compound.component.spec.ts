import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLandMarkCompoundComponent } from './edit-land-mark-compound.component';

describe('EditLandMarkCompoundComponent', () => {
  let component: EditLandMarkCompoundComponent;
  let fixture: ComponentFixture<EditLandMarkCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLandMarkCompoundComponent]
    });
    fixture = TestBed.createComponent(EditLandMarkCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
