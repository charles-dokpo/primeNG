import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarService } from './carservice';
import * as moment from 'moment';

// pour l'ouverture de la modal
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { PlanningComponent } from './planning/planning.component';
import {PlanningService} from './planning.service';
import {DialogModule} from 'primeng/dialog';
import {BankHolidayService} from './bank-holiday.service';
import { Store, select } from '@ngrx/store';
import { roomsFetchRequested } from './store/planning.actions';
import { Observable} from 'rxjs';
import {selectRooms} from './store/planning.selectors';
import { map } from 'rxjs/operators';
import { State } from './store/planning.reducer';
import { Planning } from './planning';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService, PlanningService]
})
export class AppComponent  implements OnInit {
  minDate: Date;
  maxDate: Date;

  @Output() test = new EventEmitter<any>();


  // jour du mois
  firstDay: any;
  lastDay: any;
  monthDate: Date;

  // date du mois
  daysMonths: any [] = [];

  // select. de la salle
  rooms: any;
  selectedRooms: any [] = [];


// type d'audience
  audienceType: any;
  audienceTypeSelected: any [] = [];

  // pour les données de la salle
  hearingData: any[] = [];

  displayFrozenColumn: any[] = [];
  days: any [] = [];

  holiday: any;

  // pour la partie modal
  ref: DynamicDialogRef;
  displayModal: boolean;

  movies$: Observable<[]>;

constructor(public dialogService: DialogService, public planningService: PlanningService,
            public bankHolidayService: BankHolidayService, private store: Store <State>) { }

// tslint:disable-next-line: typedef
ngOnInit() {

  this.store.dispatch(roomsFetchRequested());
  const resp = this.bankHolidayService.getAllHoliday();
  resp.subscribe((data) => {this.holiday = JSON.parse(JSON.stringify(data)); });

   // this.store.select(state => state.roomsState);

  // this.movies$ = this.store.pipe(select(selectRooms));
 /* this.store
  .select(selectRooms).pipe(map(state => state.roomsState))*/
  this.bankHolidayService.getAllrooms().subscribe(data => this.rooms = data);


  this.audienceType = [
      { name: 'ACO'},
      { name: 'AER'},
   ];



}

showModalDialog() {
  this.displayModal = true;
}


 hearingAudienceOk(): boolean {
          return !!this.monthDate && this.selectedRooms.length > 0 && this.audienceTypeSelected.length > 0;
  }


   // tslint:disable-next-line: typedef
   selectMOnth(){
     this.firstDay = (moment(this.monthDate).format('DD/MM/YYYY'));
     this.lastDay = (moment(this.monthDate).endOf('month').format('DD/MM/YYYY'));
   }

   validateMOnth(): boolean {
    return !!this.firstDay && !!this.lastDay;
}

// tslint:disable-next-line: typedef
allDaysOfMonth(array) {
  const date = moment(new Date(this.monthDate.getFullYear(), this.monthDate.getMonth(), 1));
  const bankDays = (Object.keys(this.holiday));

  let isHoliday = false;

  while (date.month() === this.monthDate.getMonth()) {

       for (let i = 0; i < bankDays.length; i++) {
         const element = moment(bankDays[i]);
         if (date.year() === element.year() && date.month() === element.month() &&
        date.date() === element.date()) {
          isHoliday = true;
          break;
        }else {
          isHoliday = false;
        }

       }
       array.push({ Date : date.format('DD/MM/YYYY'), Holiday : isHoliday });
       date.set('date', date.date() + 1);
     }
  return array;
}

generateHearing() {
  this.daysMonths = [];

  this.allDaysOfMonth(this.daysMonths);

  this.selectedRooms.forEach(el => {el.field = el.id; });

  const finalValue: Planning = {allDates : this.daysMonths, roomSelected : this.selectedRooms,
    startDate : this.firstDay, endDate : this.lastDay};
  this.planningService.emitFinalValue(finalValue);

  this.ref = this.dialogService.open(PlanningComponent, {
    header: 'Tableau occupation des salles',
    width: '90%',
    contentStyle: {'max-height': 'auto', overflow: 'auto'},
    baseZIndex: 10000
});

}


}




