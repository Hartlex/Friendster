import { TestBed } from '@angular/core/testing';

import { WebFacadeMockDBService } from './web-facade-mock-db.service';

describe('WebFacadeMockDBService', () => {
  let service: WebFacadeMockDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebFacadeMockDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
