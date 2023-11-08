import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDescriptionComponent } from './building-description.component';

describe('BuildingDescriptionComponent', () => {
  let component: BuildingDescriptionComponent;
  let fixture: ComponentFixture<BuildingDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingDescriptionComponent]
    });
    fixture = TestBed.createComponent(BuildingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
