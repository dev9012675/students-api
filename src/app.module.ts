import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule , ConfigService } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal:true}) ,
    StudentsModule , MongooseModule.forRootAsync({imports:[ConfigModule] ,
      useFactory: async (configService:ConfigService)=> ({uri:configService.get<string>(`MONGO_STRING`)}) ,
      inject:[ConfigService]
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
