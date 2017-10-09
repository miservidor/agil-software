import { TestBed, inject } from '@angular/core/testing';

import { AuthlogService } from './authlog.service';

describe('AuthlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthlogService]
    });
  });

  it('should be created', inject([AuthlogService], (service: AuthlogService) => {
    expect(service).toBeTruthy();
  }));
});
