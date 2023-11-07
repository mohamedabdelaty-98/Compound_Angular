import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompoundsComponent } from './get-compounds.component';

describe('GetCompoundsComponent', () => {
  let component: GetCompoundsComponent;
  let fixture: ComponentFixture<GetCompoundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCompoundsComponent]
    });
    fixture = TestBed.createComponent(GetCompoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
