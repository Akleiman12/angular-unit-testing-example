import { TestBed } from '@angular/core/testing';

import { ValuesService } from './values.service';

describe('ValuesService', () => {

  let service: ValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setValue', () => {
    const value = 5;
    service.setValue(value);
    console.log('value is ', value);
    expect(service.value).toEqual(value);
  });
});
