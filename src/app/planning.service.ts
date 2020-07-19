import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanningService {

emitValue = new EventEmitter<any>();
  value: any = [];

  constructor() { }

  emitSubject1 = new Subject<any[]>();

 
  emitFinalValue(array) {
    console.log(array);
    this.value = array;
    return this.value;
   // return new EventEmitter<any>(array);
   }


  emitdaysMonths(array) {
    return this.emitSubject1.next(array.slice());
   }



}


