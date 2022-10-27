import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaveComponent } from './component/save/save.component';
import { EditTourComponent } from './component/edit-tour/edit-tour.component';
import { TourListComponent } from './component/tour-list/tour-list.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    EditTourComponent,
    TourListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
