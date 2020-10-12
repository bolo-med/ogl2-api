import { getManager } from "typeorm"
import { Kategorija } from './../models/kategorija'

export class KategorijeRepository {

    getAllkategorija = () => {
        return getManager().getRepository(Kategorija).find();
    };

    insertKategorija = (kategorija: Kategorija) => {
        return getManager().getRepository(Kategorija).insert(kategorija);
    };

}

