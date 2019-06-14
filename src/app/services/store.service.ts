import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public product = new Subject();
  constructor() { }

}
