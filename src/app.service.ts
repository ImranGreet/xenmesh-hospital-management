import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    let stringCOntainer = ['Apple', 'Banana', 'Oranges'];
    return stringCOntainer;
  }
}
