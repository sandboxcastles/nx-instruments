import { Component } from '@angular/core';

@Component({
  selector: 'instruments-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	links: { path: string | string[]; title: string; }[] = [
		{path: '', title: 'Home'},
		{path: 'instruments', title: 'Instruments'}
	]
}
