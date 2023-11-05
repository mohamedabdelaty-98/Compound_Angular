import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundbuildingComponent } from './compoundbuilding.component';

describe('CompoundbuildingComponent', () => {
  let component: CompoundbuildingComponent;
  let fixture: ComponentFixture<CompoundbuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundbuildingComponent]
    });
    fixture = TestBed.createComponent(CompoundbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
