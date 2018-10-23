import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';

import { FormsModule } from '@angular/forms';
import { ReportDetailComponent } from './report-detail/report-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
