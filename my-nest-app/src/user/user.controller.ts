import { Controller, Get } from '@nestjs/common';

@Controller('user') // controller decoter
export class UserController {
  @Get()
  getUser() {
    return 'User data fetched succsessfully!!!!';
  }
}
