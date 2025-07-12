import { Controller, Get, Query } from '@nestjs/common';
import { TransportationService } from './transportation.service';

@Controller('transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Get('rides')
  async getRides(@Query('lat') lat: string, @Query('lng') lng: string) {
    return this.transportationService.getRides(lat, lng);
  }
