import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import kategorijeRouter from "../routers/kategorije-router";
import { Kategorija } from "./kategorija";

@Entity('podkategorije')
export class Podkategorija {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'kategorija_id',
        type: 'int',
        nullable: false
    })
    kategorijaID: number;

    @Column({
        name: 'naziv',
        type: 'char',
        nullable: false
    })
    naziv: string;

    @ManyToOne(type => Kategorija, kategorija => kategorija.podkategorije)
    @JoinColumn({name: 'kategorija_id'})
    kategorija: Kategorija;

}

