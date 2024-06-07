import { Module } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [InsurancesController],
  providers: [InsurancesService],
  imports: [PrismaModule],
})
export class InsurancesModule {}
