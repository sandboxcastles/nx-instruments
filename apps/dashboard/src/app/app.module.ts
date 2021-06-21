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
import { FormControlDropdownComponent } from './components/form-control-dropdown/form-control-dropdown.component';
import { InstrumentTypeSelectorComponent } from './instrument/instrument-type-selector/instrument-type-selector.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@instruments/material';

@NgModule({
  declarations: [AppComponent, InstrumentComponent, InstrumentDetailComponent, InstrumentListComponent, InstrumentCreateComponent, NavbarComponent, FormControlDropdownComponent, InstrumentTypeSelectorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, CoreStateModule, RouterModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
