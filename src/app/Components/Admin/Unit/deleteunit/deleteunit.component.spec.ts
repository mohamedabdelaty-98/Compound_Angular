import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteunitComponent } from './deleteunit.component';

describe('DeleteunitComponent', () => {
  let component: DeleteunitComponent;
  let fixture: ComponentFixture<DeleteunitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteunitComponent]
    });
    fixture = TestBed.createComponent(DeleteunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
