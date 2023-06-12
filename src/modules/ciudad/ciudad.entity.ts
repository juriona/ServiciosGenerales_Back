import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    nombre_corto: string
}