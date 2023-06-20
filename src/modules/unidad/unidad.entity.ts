import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Unidad{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string
}
