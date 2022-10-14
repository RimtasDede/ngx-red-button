import { TestBed } from '@angular/core/testing';

import { RedButtonService } from './red-button.service';

describe('RedButtonService', () => {
  let service: RedButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
