import { getManager } from "typeorm"
import { Kategorija } from './../models/kategorija'

export class KategorijeRepository {

    getAllkategorija = () => {
        return getManager().getRepository(Kategorija).find();
    };

    getKategorijaByID = (id: number) => {
        return getManager().getRepository(Kategorija).findOne(id);
    };

    insertKategorija = (kategorija: Kategorija) => {
        return getManager().getRepository(Kategorija).insert(kategorija);
    };

    updateKategorija = (kategorija: Kategorija) => {
        return getManager().getRepository(Kategorija).save(kategorija);
    };

    deleteKategorija = (id: number) => {
        return getManager().getRepository(Kategorija).delete(id);
    };

}

