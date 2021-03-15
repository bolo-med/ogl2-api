import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Kategorija } from "./kategorija";
import { Oglas } from "./oglas";

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

    @OneToMany(type => Oglas, oglas => oglas.podkategorija)
    oglasi: Oglas[];

}

