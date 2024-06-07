import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InsurancesModule } from './insurances/insurances.module';
import { InsuranceTypesModule } from './insurance-types/insurance-types.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, InsurancesModule, InsuranceTypesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
