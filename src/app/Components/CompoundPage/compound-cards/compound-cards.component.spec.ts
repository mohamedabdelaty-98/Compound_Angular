import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundCardsComponent } from './compound-cards.component';

describe('CompoundCardsComponent', () => {
  let component: CompoundCardsComponent;
  let fixture: ComponentFixture<CompoundCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundCardsComponent]
    });
    fixture = TestBed.createComponent(CompoundCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
