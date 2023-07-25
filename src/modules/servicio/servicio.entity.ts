import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoServicio } from "../tipo_servicio/tipo_servicio.entity";
import { Area } from "../area/area.entity";
import { Persona } from "../persona/persona.entity";
import { Proveedor } from "../proveedor/proveedor.entity";
import { Unidad } from "../unidad/unidad.entity";

@Entity()
export class Servicio{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> TipoServicio,(tipo_servicio)=>{ tipo_servicio.id})
    @JoinColumn({name:'tipo_servicio_id'})
    tipo_servicio: TipoServicio

    @ManyToOne(()=> Area,(area)=>{area.id})
    @JoinColumn({name: 'area_id'})
    area: Area

    @ManyToOne(()=> Persona, (persona)=>{persona.id})
    @JoinColumn({name: 'persona_id'})
    persona: Persona

    @ManyToOne(()=> Proveedor,(proveedor)=>{proveedor.id})
    @JoinColumn({name: 'proveedor_id'})
    proveedor: Proveedor

    @ManyToOne(()=>Unidad,(unidad)=>{unidad.id})
    @JoinColumn({name: 'unidad_id'})
    unidad: Unidad

    @Column()
    numero_cuenta_contrato: string

    @Column()
    fecha_contrato: Date

    @Column()
    numero_cuenta_bancaria1: number
    
    @Column()
    numero_cuenta_bancaria2: number
    

}