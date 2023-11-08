import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpoundComponent } from './cmpound.component';

describe('CmpoundComponent', () => {
  let component: CmpoundComponent;
  let fixture: ComponentFixture<CmpoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmpoundComponent]
    });
    fixture = TestBed.createComponent(CmpoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
