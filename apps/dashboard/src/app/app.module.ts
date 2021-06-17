import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app-.module';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentDetailComponent } from './instrument/instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument/instrument-list/instrument-list.component';

@NgModule({
  declarations: [AppComponent, InstrumentComponent, InstrumentDetailComponent, InstrumentListComponent],
  imports: [BrowserModule, HttpClientModule, AppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
