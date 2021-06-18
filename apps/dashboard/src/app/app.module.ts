import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentDetailComponent } from './instrument/instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument/instrument-list/instrument-list.component';
import { CoreStateModule } from '@instruments/core-state';
import { ReactiveFormsModule } from '@angular/forms';
import { InstrumentCreateComponent } from './instrument/instrument-create/instrument-create.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstrumentTypeSelectorComponent } from './components/instrument-type-selector/instrument-type-selector.component';

@NgModule({
  declarations: [AppComponent, InstrumentComponent, InstrumentDetailComponent, InstrumentListComponent, InstrumentCreateComponent, NavbarComponent, InstrumentTypeSelectorComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule, CoreStateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
