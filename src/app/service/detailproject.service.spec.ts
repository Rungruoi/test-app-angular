import { TestBed } from '@angular/core/testing';

import { DetailprojectService } from './detailproject.service';

describe('DetailprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailprojectService = TestBed.get(DetailprojectService);
    expect(service).toBeTruthy();
  });
});
