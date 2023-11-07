import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProjectComponent } from './services-project.component';

describe('ServicesProjectComponent', () => {
  let component: ServicesProjectComponent;
  let fixture: ComponentFixture<ServicesProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesProjectComponent]
    });
    fixture = TestBed.createComponent(ServicesProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
