import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningComponent } from './planning/planning.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CarService } from './carservice';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {PlanningEffects} from './store/planning.effects';
import {FEATURE_NAME} from './store/planning.selectors';
import {HearingPlanningReducer} from './store/planning.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ListPlanningCreatedComponent } from './list-planning-created/list-planning-created.component';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    ListPlanningCreatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    ListboxModule,
    ButtonModule,
    MultiSelectModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    DropdownModule,
    DynamicDialogModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(FEATURE_NAME, HearingPlanningReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([PlanningEffects]),
    StoreDevtoolsModule.instrument({ }),
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
