import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Kategorija } from "./kategorija";
import { Korisnik } from "./korisnik";

@Entity('oglasi')
export class Oglas {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'tekst',
        type: 'text',
        nullable: false
    })
    tekst: string;

    @Column({
        name: "dat_objave",
        type: 'date',
        nullable: false
    })
    datumObjave: Date;

    @Column({
        name: 'dat_vazenja',
        type: 'date',
        nullable: true
    })
    datumVazenja: Date;

    @Column({
        name: 'kategorija_id',
        type: 'int',
        nullable: false
    })
    kategorijaID: number;

    @Column({
        name: 'korisnik_id',
        type: 'int',
        nullable: false
    })
    korisnikID: number;

    @ManyToOne(type => Kategorija, kategorija => kategorija.oglasi)
    @JoinColumn({name: 'kategorija_id'})
    kategorija: Kategorija;

    @ManyToOne(type => Korisnik, korisnik => korisnik.oglasi)
    @JoinColumn({name: 'korisnik_id'})
    korisnik: Korisnik;

}

