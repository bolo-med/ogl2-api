import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}

