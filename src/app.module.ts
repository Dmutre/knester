import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import serverConfig from './lib/config/service.config';
import { configValidationSchema } from './lib/validation-schemas/config-validation-schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig],
      validationSchema: configValidationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
