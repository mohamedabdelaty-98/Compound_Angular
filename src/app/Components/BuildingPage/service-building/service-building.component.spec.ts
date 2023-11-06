import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBuildingComponent } from './service-building.component';

describe('ServiceBuildingComponent', () => {
  let component: ServiceBuildingComponent;
  let fixture: ComponentFixture<ServiceBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBuildingComponent]
    });
    fixture = TestBed.createComponent(ServiceBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
