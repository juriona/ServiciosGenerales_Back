import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './modules/ciudad/ciudad.module';
import { TipoEmpresaModule } from './modules/tipo_empresa/tipo_empresa.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';


@Module({
  imports: [CiudadModule, TipoEmpresaModule, ProveedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
