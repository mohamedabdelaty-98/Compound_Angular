import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuildingComponent } from './newbuilding.component';

describe('NewbuildingComponent', () => {
  let component: NewbuildingComponent;
  let fixture: ComponentFixture<NewbuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbuildingComponent]
    });
    fixture = TestBed.createComponent(NewbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
