import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ciudad } from "../ciudad/ciudad.entity";
import { TipoEmpresa } from "../tipo_empresa/tipo_empresa.entity";

@Entity()
export class Proveedor{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    nombre_legal: string

    @Column()
    nit: number

    @Column()
    telefono: string

    @Column()
    correo: string

    @Column()
    direccion: string

    @OneToOne(() => Ciudad)
    @JoinColumn({name:'cuidad_id'})
    ciudad: Ciudad

    @OneToOne( () => TipoEmpresa)
    @JoinColumn( {name: 'tipo_empresa_id'})
    tipo_empresa: TipoEmpresa

}