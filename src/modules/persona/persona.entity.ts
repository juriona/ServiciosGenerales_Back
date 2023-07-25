import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombres: string

    @Column()
    apellido_paterno: string

    @Column()
    apellido_materno: string
    
}
