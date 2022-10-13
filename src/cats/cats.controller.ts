import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action creates new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    console.log('Req', request);
    return 'This action returns cats';
  }
}
