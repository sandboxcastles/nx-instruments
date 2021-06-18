import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InstrumentService } from './services/instrument/instrument.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
	providers: [InstrumentService]
})
export class CoreDataModule {}
