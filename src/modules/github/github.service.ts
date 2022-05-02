import axios from 'axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

axios.defaults.baseURL = 'https://github.com/login/oauth';
axios.defaults.headers.post = { accept: 'application/vnd.github.v3+json' };

@Injectable()
export class GithubService {
  constructor(private readonly Config: ConfigService) {}

  async getToken(code: string): Promise<any> {
    try {
      const CLIENT_ID = this.Config.get('GITHUB_CLIENT_ID');
      const CLIENT_SECRET = this.Config.get('GITHUB_CLIENT_SECRET');
      const url = `access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;
      const response = await axios.post(url);
      return response.data;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
