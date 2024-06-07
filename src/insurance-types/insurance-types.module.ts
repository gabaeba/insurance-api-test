import { Module } from '@nestjs/common';
import { InsuranceTypesService } from './insurance-types.service';
import { InsuranceTypesController } from './insurance-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [InsuranceTypesController],
  providers: [InsuranceTypesService],
  imports: [PrismaModule],
})
export class InsuranceTypesModule {}
