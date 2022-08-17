import { TestBed } from '@angular/core/testing';

import { BoarduserService } from './boarduser.service';

describe('BoarduserService', () => {
  let service: BoarduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoarduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
