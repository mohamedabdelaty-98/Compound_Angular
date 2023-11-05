import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandMarkCompoundComponent } from './add-land-mark-compound.component';

describe('AddLandMarkCompoundComponent', () => {
  let component: AddLandMarkCompoundComponent;
  let fixture: ComponentFixture<AddLandMarkCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLandMarkCompoundComponent]
    });
    fixture = TestBed.createComponent(AddLandMarkCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
