import { TestBed } from '@angular/core/testing';

import { MemberapiService } from './memberapi.service';

describe('MemberapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberapiService = TestBed.get(MemberapiService);
    expect(service).toBeTruthy();
  });
});
