import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListResolver } from './list.resolver';

describe('ListResolver', () => {
  let resolver: ListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(ListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
