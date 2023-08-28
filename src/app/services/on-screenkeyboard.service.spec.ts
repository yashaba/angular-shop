import { TestBed } from '@angular/core/testing';

import { OnScreenkeyboardService } from './on-screenkeyboard.service';

describe('OnScreenkeyboardService', () => {
  let service: OnScreenkeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnScreenkeyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
