import { TestBed } from '@angular/core/testing';

import { IconSelectorService } from './icon-selector.service';

describe('IconSelectorService', () => {
  let service: IconSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
