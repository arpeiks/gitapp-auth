import { GithubService } from './github.service';
import { GetTokenRequestDto } from '../github.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('github')
export class GithubController {
  constructor(private readonly Github: GithubService) {}

  @Post('token')
  async getToken(@Body() body: GetTokenRequestDto): Promise<any> {
    return await this.Github.getToken(body.code);
  }
}
