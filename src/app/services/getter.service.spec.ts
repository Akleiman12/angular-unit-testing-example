import { TestBed } from '@angular/core/testing';

import { GetterService } from './getter.service';
import { ValuesService } from './values.service';

describe('GetterService', () => {

  let service: GetterService;
  let serviceSpy;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('ValuesService', ['getValue'] );
    TestBed.configureTestingModule({
      providers: [
        GetterService,
        { provide: ValuesService, useValue: serviceSpy}
      ]
    });
    service = TestBed.get(GetterService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should recieve a defined value from getValue()', () => {
    const value = 5;

    serviceSpy.getValue.and.returnValue(value);

    expect(service.getValue()).toEqual(value);
  });
});
