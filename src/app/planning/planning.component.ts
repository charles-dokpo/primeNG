import { Component, OnInit, Input } from '@angular/core';
import {PlanningService} from '../planning.service';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { BankHolidayService } from '../bank-holiday.service';
// import { Subscription } from 'rxjs/Subscription';
import {Planning } from '../planning';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {


selectedRoom: any;
frozenColumn = [];
daysMonths: any;

clickObservable: Subscription;

 valueFinal: Planning;

  constructor(private planningService: PlanningService, private bankholidayService: BankHolidayService) { }

  ngOnInit(): void {

 this.valueFinal = new Planning();


 this.selectedRoom = this.planningService.value.roomSelected;
 this.frozenColumn.push({ field : 'Date' , header : 'Date'});
 this.daysMonths = this.planningService.value.allDates;

  }

  /*
  ngAfterViewInit(): void {

    this.selectedRoomsFromParent = this.planning.emitSubject1.pipe(map(value => value)).subscribe(
      (selectedRoom) => { console.log(selectedRoom);
       // this.selectedRoom = selectedRoom;
        console.log(this.selectedRoom);
      }
    );
  } */

save(){

  this.planningService.save();
  this.planningService.responseSavePlanning.subscribe(data => console.log(data) );


  /*
  this.valueFinal.allDates = JSON.stringify(this.daysMonths);
  this.valueFinal.columnFrozen = JSON.stringify(this.frozenColumn);
  this.valueFinal.roomSelected = JSON.stringify(this.selectedRoom);
  console.log(this.valueFinal);
  const resp = this.bankholidayService.savePlanning(this.valueFinal);
  resp.subscribe((data) => {console.log(data)});*/
}

}
