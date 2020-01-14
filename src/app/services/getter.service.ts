import { Injectable } from '@angular/core';
import { ValuesService } from './values.service';

@Injectable({
  providedIn: 'root'
})
export class GetterService {

  constructor(private valueService: ValuesService) { }

  public getValue() {
    return this.valueService.getValue();
  }
}
