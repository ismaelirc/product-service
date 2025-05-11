import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EstablishmentClient {
  constructor(private readonly http: HttpService) {}

  async checkIfExists(establishmentId: string): Promise<void> {
    try {
      await firstValueFrom(
        this.http.get(`http://establishmentservice:3000/v1/establishment/${establishmentId}`)
      );
    } catch (error) {
      throw new NotFoundException('Establishment not found');
    }
  }
}