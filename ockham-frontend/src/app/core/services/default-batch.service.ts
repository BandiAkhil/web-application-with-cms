import { Injectable } from '@angular/core';
import { differenceInYears } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DefaultBatchService {

  private baseYear = new Date(2019, 9, 1);
  private defaultBatchNumber = 11;

  constructor() {}

  setValue(batch: number) {
    this.defaultBatchNumber = batch;
  }

  getValue(): number {
    return this.defaultBatchNumber + differenceInYears(new Date(), this.baseYear);
  }
}
