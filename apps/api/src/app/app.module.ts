import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentsModule } from './instruments/instruments/instruments.module';

@Module({
  imports: [InstrumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
