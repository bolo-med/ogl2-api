import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}

