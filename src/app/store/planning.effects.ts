import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { roomsFetchRequested, roomsFetchSuccess } from './planning.actions';
import {catchError, first, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import { BankHolidayService } from '../bank-holiday.service';




@Injectable()
export class PlanningEffects {

  loadRooms = createEffect(() => this.actions$.pipe(
    ofType(roomsFetchRequested),
    switchMap(() => combineLatest([
      this.bankHolidayService.getAllrooms()]
    ).pipe(
        map(([rooms]) =>
          roomsFetchSuccess({rooms})),
       ))));

  constructor(private actions$: Actions, private bankHolidayService: BankHolidayService) {}

}
