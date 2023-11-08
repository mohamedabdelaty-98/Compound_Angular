import { TestBed } from '@angular/core/testing';

import { EditcompoundService } from './editcompound.service';

describe('EditcompoundService', () => {
  let service: EditcompoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditcompoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
