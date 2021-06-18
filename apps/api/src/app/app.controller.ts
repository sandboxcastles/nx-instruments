import { Controller, Get, Param } from '@nestjs/common';

import { Instrument } from '@instruments/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

	@Get()
	getInfo() {
		return { message: 'Welcome to the Instruments Api!' };
	}
}
