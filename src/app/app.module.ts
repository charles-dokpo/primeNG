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


@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    ListboxModule,
    ButtonModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
