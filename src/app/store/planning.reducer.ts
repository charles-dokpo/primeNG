import { Action, createReducer, on } from '@ngrx/store';
import { roomsFetchRequested, roomsFetchSuccess } from './planning.actions';


export const planningFeatureKey = 'planning';


export interface State {
  roomsState: [];
}

export const initialState: State = {
  roomsState : []
};


export const reducer = createReducer(
  initialState,
  on(roomsFetchRequested, state => ({
    ...state,
    rooms: [],
})),
on(roomsFetchSuccess, (state, action) => ({
  ...state,
  rooms : action.rooms
})));

export function HearingPlanningReducer(state , action: Action) {
  return reducer(state, action);
}
