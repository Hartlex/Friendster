import { TestBed } from '@angular/core/testing';

import { WebFacadeService } from './web-facade.service';

describe('WebFacadeService', () => {
  let service: WebFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
