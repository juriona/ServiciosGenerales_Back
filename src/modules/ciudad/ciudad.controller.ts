import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CiudadService } from './ciudad.service';
import { CreateCiudadDto } from './ciudad.dto';
@ApiTags('Ciudad')
@Controller('ciudad')
export class CiudadController {
    constructor(private readonly _ciudadService: CiudadService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll()
    {
        return this._ciudadService.obtenerTodos()
    }
    @Post()
    @HttpCode(HttpStatus.OK)
    async createCiudad(@Body() ciudad_dto: CreateCiudadDto )
    {
        let ciudad = await this._ciudadService.guardarCiudad(ciudad_dto)
        console.log(ciudad)

        return ciudad        
    }
}
