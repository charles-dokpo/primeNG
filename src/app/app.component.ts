import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { CarService } from './carservice';
import { Car } from './car';

interface Rooms {
  name: string ;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  minDate: Date;
  maxDate: Date;
  monthDate: Date;

  firstDay: any;
  lastDay: any;

  rooms: Rooms [];
  selectedRooms: any [] = [];

  checkRoom: any;
  checkRoomSelected: any [] = [];

  cars1: any[] = [];

  // cols: any[];

  frozenCols: any[] = [];

  scrollableCols: any[] = [];

  days: any [] = []
;
constructor(private carService: CarService) { }

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

    this.checkRoom = [
      { name: 'ACO'},
      { name: 'AER'},
   ];

   //this.carService.getCarsMedium().then(cars => this.cars1 = cars);

    /*  this.scrollableCols = [
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];*/

  // this.rooms.forEach( el => this.scrollableCols.push({ field : el.name , header : el.name}));

   /* this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];*/

  /*  this.scrollableCols = [
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];*/

  /*  this.frozenCols = [
    { field: 'vin', header: 'Vin' }
];
*/
   /* this.frozenCars = [
    { 'brand': 'BMW', 'year': 2013, 'color': 'Grey', 'vin': 'fh2uf23' },
    { 'brand': 'Chevrolet', 'year': 2011, 'color': 'Black', 'vin': '4525g23' }
];*/

}


 generateHearing(): boolean {
          return !!this.monthDate && this.selectedRooms.length > 0 && this.checkRoomSelected.length > 0;
  }

  /*validateDate(maxDate) {
      if (this.minDate > this.maxDate) {
          return true;
      }
   }*/

   selectMOnth(){
     this.firstDay = new Date(this.monthDate.getFullYear(), this.monthDate.getMonth(), 1).toLocaleString().substring(0, 10);
     this.lastDay = new Date(this.monthDate.getFullYear(), this.monthDate.getMonth() + 1, 0).toLocaleString().substring(0, 10);
   }

   validateMOnth(): boolean {
    return !!this.firstDay && !!this.lastDay;
}

validateHearing(){
  let date = new Date(this.monthDate.getFullYear(),this.monthDate.getMonth(), 1);
  let arraydate1 = [];
  let arraydate2 = [];

  while (date.getMonth() === this.monthDate.getMonth()) {
    this.days.push(new Date(date).toLocaleString().substring(0, 10));
    date.setDate(date.getDate() + 1);
  }
  console.log(this.days);
// pour la selection des salles OK
  this.selectedRooms.forEach( el => this.scrollableCols.push({ field : el.name , header : el.name}));

  // pour l'en tete de la colonne bloqué OK
  this.frozenCols.push({ field : 'Date' , header : 'Date'});

  console.log(this.checkRoomSelected);

  this.checkRoomSelected.forEach( el => arraydate2.push({ field : el.name , header : el.name}));
    
  this.days.forEach( el => arraydate1.push({ Date : el}));

  this.cars1 = arraydate1;

  this.cars1.forEach(el => {el.field = "ACO" ; el.name ="ACO" })

  console.log(this.cars1);

 // this.days.forEach( el => this.frozenCols.push({ field : 'Date' , header : 'Date'}));
  

  // return this.days;
}

 getDaysInMonth(month, year){

 return new Date(year, month, 0).getDate();

}

}


/* 
import { Component, OnInit } from '@angular/core';
import {CALENDAR_FR_LOCALE} from "../../_shared/widget/calendar/calendar.strings";
import {SelectItem} from 'primeng/api';

interface Rooms {
    name: string ;
}

@Component({
  selector: 'oae-hearings-planning',
  templateUrl: './hearings-planning.component.html',
  styleUrls: ['./hearings-planning.component.scss']
})
export class HearingsPlanningComponent implements OnInit {
    minDate: Date;
    maxDate: Date;
    fr = CALENDAR_FR_LOCALE;
    rooms : Rooms [];
    selectedRooms: any [] = [];
  constructor() { }

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
          { name: '010'}
       ];
  }

   generateHearing(): boolean {
            return !!this.minDate && !!this.maxDate && this.selectedRooms.length > 0;
    }

    validateDate(maxDate) {
        if (this.minDate > this.maxDate)
            return true;
     }
}

 */


