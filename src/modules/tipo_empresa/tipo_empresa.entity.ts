import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoEmpresa{
     @PrimaryGeneratedColumn()
     id: number

     @Column()
     nombre: string
}