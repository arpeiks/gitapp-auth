import config from './config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './modules/github/github.module';

@Module({
  imports: [
    GithubModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
  ],
})
export class AppModule {}
