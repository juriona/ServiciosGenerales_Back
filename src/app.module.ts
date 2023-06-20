import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './modules/ciudad/ciudad.module';
import { TipoEmpresaModule } from './modules/tipo_empresa/tipo_empresa.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { PersonaModule } from './modules/persona/persona.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ServicioModule } from './modules/servicio/servicio.module';
import { SolicitudModule } from './modules/solicitud/solicitud.module';
import { TipoServicioModule } from './modules/tipo_servicio/tipo_servicio.module';
import { AreaModule } from './modules/area/area.module';
import { UnidadModule } from './modules/unidad/unidad.module';



@Module({
  imports: [CiudadModule, TipoEmpresaModule, ProveedorModule, PersonaModule, UsuarioModule, ServicioModule, SolicitudModule, TipoServicioModule, AreaModule, UnidadModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
