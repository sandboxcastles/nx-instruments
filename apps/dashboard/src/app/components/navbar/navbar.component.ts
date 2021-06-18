import { Component, Input } from '@angular/core';

@Component({
  selector: 'instruments-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	@Input() links: { path: string | string[]; title: string; }[];
}
