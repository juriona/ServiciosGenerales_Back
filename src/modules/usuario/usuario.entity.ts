import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../persona/persona.entity";

@Entity()
export class Usuario
{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @ManyToOne(()=> Persona,(persona)=>{persona.id})
    @JoinColumn({ name: 'persona_id'})
    persona: Persona
    
}