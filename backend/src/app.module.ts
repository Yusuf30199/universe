import { Module } from '@nestjs/common';
import { TransportationModule } from './transportation/transportation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, TransportationModule],
})
export class AppModule {}
