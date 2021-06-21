import { Injectable } from '@angular/core';
import { Instrument } from '@instruments/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as InstrumentsActions from './instruments.actions';
import * as InstrumentsSelectors from './instruments.selectors';


@Injectable({
  providedIn: 'root'
})
export class InstrumentsFacade {
  loaded$ = this.store.pipe(select(InstrumentsSelectors.getInstrumentsLoaded));
  allInstruments$ = this.store.pipe(select(InstrumentsSelectors.getAllInstruments));
  selectedInstrument$ = this.store.pipe(select(InstrumentsSelectors.getSelectedInstrument));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === InstrumentsActions.createInstrumentSuccess({} as any).type ||
      action.type === InstrumentsActions.updateInstrumentSuccess({} as any).type ||
      action.type === InstrumentsActions.deleteInstrumentSuccess({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectInstrument(selectedId: string) {
    this.dispatch(InstrumentsActions.selectInstrument({ selectedId }));
  }

  loadInstruments() {
    this.dispatch(InstrumentsActions.loadInstruments());
  }

  createInstrument(instrument: Instrument) {
    // We are generate the UUID at the client because of a sqlite limitation
    this.dispatch(InstrumentsActions.createInstrument({ instrument: { ...instrument, id: uuidv4() } }));
  }

  updateInstrument(id: string, instrument: Instrument) {
    this.dispatch(InstrumentsActions.updateInstrument({ id, instrument }));
  }

  deleteInstrument(id: string) {
    this.dispatch(InstrumentsActions.deleteInstrument({ id }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

// const initialInstruments: Instrument[] = [];

// @Injectable({
//   providedIn: 'root'
// })
// export class InstrumentsFacadeWithSubjects {
// 	instruments: Instrument[] = [];

// 	loadedSubject = new BehaviorSubject(false);
// 	allInstrumentsSubject = new BehaviorSubject<Instrument[]>(this.instruments);
// 	selectedInstrumentSubject = new BehaviorSubject<Instrument | undefined>(undefined);
// 	loaded$ = this.loadedSubject.asObservable();
// 	allInstruments$ = this.allInstrumentsSubject.asObservable();
// 	selectedInstrument$ = this.selectedInstrumentSubject.asObservable();

//   selectInstrument(selectedId: string) {
// 		const instrument = this.instruments.find(i => i.id === selectedId);
// 		this.selectedInstrumentSubject.next(instrument);
//   }

//   loadInstruments() {
// 		this.allInstrumentsSubject.next(initialInstruments);
//   }

//   createInstrument(instrument: Instrument) {
// 		this.instruments.push({ ...instrument, id: uuidv4() });
// 		this.allInstrumentsSubject.next(this.instruments);
//   }

//   updateInstrument(id: string, instrument: Instrument) {
// 		this.instruments = this.instruments.map(i => i.id === id ? ({...i, ...instrument, id }) : i);
// 		this.allInstrumentsSubject.next(this.instruments);
//   }

//   deleteInstrument(id: string) {
// 		const existingInstrumentIndex = this.instruments.findIndex(i => i.id === id);
// 		if (existingInstrumentIndex > -1) {
// 			this.instruments = this.instruments.filter(i => i.id !== id);
// 			this.allInstrumentsSubject.next(this.instruments);
// 		}
//   }
// }
