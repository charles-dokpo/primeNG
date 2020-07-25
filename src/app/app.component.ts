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
  rooms: any [];
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

constructor(public dialogService: DialogService, public planningService: PlanningService,
            public bankHolidayService: BankHolidayService) { }

// tslint:disable-next-line: typedef
ngOnInit() {

  const resp = this.bankHolidayService.getAllHoliday();
  resp.subscribe((data) => {this.holiday = JSON.parse(JSON.stringify(data)); });

  this.rooms = [
        { field: '001'},
        { field: '002'},
        { field: '003'},
        { field: '004'},
        { field: '005'},
        { field: '006'},
        { field: '007'},
        { field: '008'},
        { field: '009'},
        { field: '010'},
        { field: '011'},
        { field: '012'},
        { field: '013'},
        { field: '014'},
        { field: '015'},
        { field: '016'},
        { field: '017'},
        { field: '018'},
        { field: '019'},
        { field: '020'}
     ];

  this.audienceType = [
      { name: 'ACO'},
      { name: 'AER'},
   ];

     // pour l'en tete de la colonne bloqué OK
  this.displayFrozenColumn.push({ field : 'Date' , header : 'Date'});


}
/*
ngAfterViewChecked(): void {

  console.log(this.holiday);
}
*/
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
         if(date.year() === element.year() && date.month() === element.month() &&
        date.date() === element.date()) {
          isHoliday = true;
          break;
        }else {
          isHoliday = false;
        }

       }
       array.push({ Date : date.format('DD/MM/YYYY'), Holiday : isHoliday });
       date.set('date', date.date() + 1);
       console.log(array)
  }
  return array;
}

generateHearing() {
  this.daysMonths = [];

  this.allDaysOfMonth(this.daysMonths);

  const finalValue = {allDates : this.daysMonths, columnFrozen : this.displayFrozenColumn, roomSelected : this.selectedRooms };
  this.planningService.emitFinalValue(finalValue);

  this.ref = this.dialogService.open(PlanningComponent, {
    header: 'Tableau occupation des salles',
    width: '90%',
    contentStyle: {'max-height': 'auto', 'overflow': 'auto'},
    baseZIndex: 10000
});

}



/*
// tslint:disable-next-line: typedef
hearingWithAudienceType(){
  this.hearingData = [];
  this.daysMonths = [];

  this.allDaysOfMonth(this.daysMonths);

  console.log(this.daysMonths);
  // pour la selection des salles OK
  this.selectedRooms.forEach( el => this.displayRoomvalidate.push({ field : el.name , header : el.name}));

  // pour l'en tete de la colonne bloqué OK
  this.displayFrozenColumn.push({ field : 'Date' , header : 'Date'});

  console.log(this.audienceTypeSelected);

  this.daysMonths.forEach( el => this.hearingData.push({ Date : el , field : 'ACO' , name : 'ACO' , empty : ''}));

  for (let i = 0;  i <  this.hearingData.length; i++) {
      if ( i < this.daysMonths.length) {
          this.hearingData[i].field =  this.audienceTypeSelected[0].name;
          this.hearingData[i].name =  this.audienceTypeSelected[0].name;
          this.hearingData[i].empty = ' ';
      } else { break; }

  }

  console.log(this.hearingData);

}

 // tslint:disable-next-line: typedef
 getDaysInMonth(month, year){

 return new Date(year, month, 0).getDate();

}*/

}




