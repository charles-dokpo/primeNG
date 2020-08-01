import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {FEATURE_NAME} from './planning.selectors';
import {HearingPlanningReducer} from './planning.reducer';
import {PlanningEffects} from './planning.effects';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})

export class PlanningStoreModule { }
*/