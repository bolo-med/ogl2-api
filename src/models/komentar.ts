import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Korisnik } from "./korisnik";
import { Oglas } from "./oglas";

@Entity('komentari')
export class Komentar {

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
        name: 'datum',
        type: 'date',
        nullable: false
    })
    datum: Date;

    @Column({
        name: 'oglas_id',
        type: 'int',
        nullable: false
    })
    oglasID: number;

    @Column({
        name: 'korisnik_id',
        type: 'int',
        nullable: false
    })
    korisnikID: number;

    @ManyToOne(type => Oglas, oglas => oglas.komentari)
    @JoinColumn({name: 'oglas_id'})
    oglas: Oglas;

    @ManyToOne(type => Korisnik, korisnik => korisnik.komentari)
    @JoinColumn({name: 'korisnik_id'})
    korisnik: Korisnik;

}

