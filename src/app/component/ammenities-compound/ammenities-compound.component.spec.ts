import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmenitiesCompoundComponent } from './ammenities-compound.component';

describe('AmmenitiesCompoundComponent', () => {
  let component: AmmenitiesCompoundComponent;
  let fixture: ComponentFixture<AmmenitiesCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmenitiesCompoundComponent]
    });
    fixture = TestBed.createComponent(AmmenitiesCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
