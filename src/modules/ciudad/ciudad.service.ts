import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ciudad } from './ciudad.entity';
import { CreateCiudadDto } from './ciudad.dto';

@Injectable()
export class CiudadService {
    constructor(@Inject('CIUDAD_REPOSITORY') private ciudadRepository: Repository < Ciudad > ){

    }

    async obtenerTodos()
    {
        return this.ciudadRepository.find()
    }

    async guardarCiudad(ciudad_dto: CreateCiudadDto)
    {
        return this.ciudadRepository.save(ciudad_dto)
    }
}
