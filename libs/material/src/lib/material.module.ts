import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
	BrowserAnimationsModule,
	MatCheckboxModule,
	MatCardModule,
	MatSliderModule
];

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule {}
