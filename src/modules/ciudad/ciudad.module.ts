import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CiudadController } from './ciudad.controller';
import { CiudadService } from './ciudad.service';
import { ciudadProviders } from './ciudad.providers';




@Module({
    imports:[DatabaseModule],
    controllers: [CiudadController],
    providers: [
        ...ciudadProviders,
        CiudadService,
    ]
})
export class CiudadModule {}
