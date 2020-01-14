import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  value: any;

  constructor() { }

  public getValue() {
    return this.value;
  }

  public async getAsyncValue() {
    return this.value;
  }

  public setValue(newValue) {
    this.value = newValue;
  }

}
