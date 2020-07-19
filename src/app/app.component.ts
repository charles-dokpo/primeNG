import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarService } from './carservice';
import * as moment from 'moment';

//pour l'ouverture de la modal
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { PlanningComponent } from './planning/planning.component';
import {PlanningService} from './planning.service';
import {DialogModule} from 'primeng/dialog';

interface Rooms {
  name: string ;
}



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
  rooms: Rooms [];
  selectedRooms: any [] = [];


// type d'audience
  audienceType: any;
  audienceTypeSelected: any [] = [];

  // pour les données de la salle
  hearingData: any[] = [];

  displayFrozenColumn: any[] = [];
  days: any [] = [];

  //pour la partie modal
  ref: DynamicDialogRef;
  displayModal: boolean;

constructor(public dialogService: DialogService, public planningService: PlanningService) { }

// tslint:disable-next-line: typedef
ngOnInit() {
    this.rooms = [
        { name: '001'},
        { name: '002'},
        { name: '003'},
        { name: '004'},
        { name: '005'},
        { name: '006'},
        { name: '007'},
        { name: '008'},
        { name: '009'},
        { name: '010'},
        { name: '011'},
        { name: '012'},
        { name: '013'},
        { name: '014'},
        { name: '015'},
        { name: '016'},
        { name: '017'},
        { name: '018'},
        { name: '019'},
        { name: '020'}
     ];

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

  while (date.month() === this.monthDate.getMonth()) {
      array.push({ Date : date.format('DD/MM/YYYY')});
      date.set('date', date.date() + 1);
  }
  return array;
}

generateHearing() {
  this.daysMonths = [];

  this.allDaysOfMonth(this.daysMonths);


  this.daysMonths.forEach( (el) => {
    el.field = this.audienceTypeSelected[0]?.name;
    el.name = this.audienceTypeSelected[0]?.name;
    // TO DO : changer lorsque tableau type d'audience complété
    el.empty = true;
  });

  this.selectedRooms.forEach( (el, i) => {
    el.field =  this.selectedRooms[i]?.name;
  });

  // pour l'en tete de la colonne bloqué OK
  this.displayFrozenColumn.push({ field : 'Date' , header : 'Date'});

  const finalValue = {allDates : this.daysMonths, columnFrozen : this.displayFrozenColumn, roomSelected : this.selectedRooms };
  this.planningService.emitFinalValue(finalValue);

/*
  this.planningService.emitdaysMonths(this.daysMonths);

  */

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




