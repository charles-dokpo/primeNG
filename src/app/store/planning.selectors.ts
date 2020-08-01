import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './planning.reducer';

export const FEATURE_NAME = 'hearingPlanning';

const selectFeature = createFeatureSelector<State>(FEATURE_NAME);


export const selectRooms = createSelector(
    selectFeature,
    state => state.roomsState
);
