import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoServicio{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    esta_activo: boolean


}