import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Komentar } from "./komentar";
import { Oglas } from "./oglas";

@Entity('korisnici')
export class Korisnik {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int'
    })
    id: number;

    @Column({
        name: 'ime',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    ime: string;

    @Column({
        name: 'prezime',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    prezime: string;

    @Column({
        name: 'username',
        type: 'varchar',
        length: 50,
        nullable: false
    })
    username: string;

    @Column({
        name: 'hashed_password',
        type: 'text',
        nullable: false
    })
    hashedPassword: string;

    @Column({
        name: 'is_admin',
        type: 'int',
        nullable: false
    })
    isAdmin: number;

    @OneToMany(type => Oglas, oglas => oglas.korisnik)
    oglasi: Oglas[];

    @OneToMany(type => Komentar, komentar => komentar.korisnik)
    komentari: Komentar[];

}

