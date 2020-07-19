import { Component, OnInit, Input } from '@angular/core';
import {PlanningService} from '../planning.service';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

private selectedRoomsFromParent: Subscription;
selectedRoom : any;
private displayFrozenColumnFromParent: Subscription;
frozenColumn  : any;
private  daysMonthsFromParent: Subscription;
daysMonths : any;

clickObservable: Subscription;

  constructor(private planning: PlanningService) { }

  ngOnInit(): void {

 
  this.selectedRoom = this.planning.value.roomSelected;
  this.frozenColumn = this.planning.value.columnFrozen;
  this.daysMonths = this.planning.value.allDates;

  }
  ngAfterViewInit(): void {

    this.selectedRoomsFromParent = this.planning.emitSubject1.pipe(map(value => value)).subscribe(
      (selectedRoom) => { console.log(selectedRoom);
       // this.selectedRoom = selectedRoom;
        console.log(this.selectedRoom);
      }
    );
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

 /* click() {
    console.log('tttt');
    const el = document.querySelector('#test');
    this.clickObservable = fromEvent(el, 'click').
    subscribe(
        (value) => console.log(value)
    );
    const source = fromEvent(el, 'click');
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    const subscribe = example.subscribe(val => console.log(val));

  }*/


}
