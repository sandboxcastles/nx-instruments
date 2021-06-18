import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentDetailComponent } from './instrument/instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument/instrument-list/instrument-list.component';
import { InstrumentComponent } from './instrument/instrument.component';

const routes: Routes = [
	{ path: 'instruments', component: InstrumentComponent},
	{ path: 'list', component: InstrumentListComponent },
	{ path: 'detail', component: InstrumentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
