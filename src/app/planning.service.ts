import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Planning } from './planning';
import { BankHolidayService } from './bank-holiday.service';


@Injectable({
  providedIn: 'root'
})
export class PlanningService {

emitValue = new EventEmitter<any>();
value = new Planning();
responseSavePlanning: any;

  constructor(private bankholidayService: BankHolidayService) { }


emitFinalValue(array) {
    return this.value = array;
     }

   save(){

    const sendPlanningData: Planning =  {
      allDates : JSON.stringify(this.value.allDates),
      roomSelected :  JSON.stringify(this.value.roomSelected),
      startDate : this.value.startDate,
      endDate : this.value.endDate
    };

    this.responseSavePlanning = this.bankholidayService.savePlanning(sendPlanningData);

   }
}


