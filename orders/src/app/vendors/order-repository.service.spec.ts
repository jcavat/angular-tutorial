import { TestBed, inject } from '@angular/core/testing';

import { OrderRepositoryService } from './order-repository.service';

describe('OrderRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderRepositoryService]
    });
  });

  it('should be created', inject([OrderRepositoryService], (service: OrderRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
