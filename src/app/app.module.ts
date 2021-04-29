import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule} from '@angular/forms';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AfterTutorialsComponent } from './after-tutorials/after-tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    AfterTutorialsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    FormsModule
      ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
