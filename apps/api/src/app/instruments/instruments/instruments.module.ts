import { HttpModule, Module } from '@nestjs/common';
import { InstrumentsController } from './instruments.controller';
import { InstrumentsService } from './instruments.service';

@Module({
	imports: [HttpModule],
  controllers: [InstrumentsController],
  providers: [InstrumentsService]
})
export class InstrumentsModule {}
