import { createAction, props } from '@ngrx/store';

export const roomsFetchRequested = createAction(
  '[Effect HearingsPlanning] roomsFetchRequested'
);

export const roomsFetchSuccess = createAction(
  '[API HearingsPlanning] roomsFetchSuccess',
  props<{
    rooms: {},
  }>()
);



