import { IsNotEmpty } from "class-validator";

export class CreateCiudadDto{
    @IsNotEmpty()
    nombre: string

    @IsNotEmpty()
    nombre_corto: string

}