import { TestBed } from '@angular/core/testing';

import { CustomMetricsService } from './custom-metrics.service';

describe('CustomMetricsService', () => {
  let service: CustomMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
