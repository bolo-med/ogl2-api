import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Oglas } from "./oglas";

@Entity('kategorije')
export class Kategorija {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'naziv',
        type: 'char',
        length: 50,
        nullable: false
    })
    naziv: string;

    @OneToMany(type => Oglas, oglas => oglas.kategorija)
    oglasi: Oglas[];

}

