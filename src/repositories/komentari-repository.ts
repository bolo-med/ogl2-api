import { getManager } from "typeorm";
import { Komentar } from "../models/komentar";
import { Korisnik } from "../models/korisnik";

export class KomentariRepository {

    getAllKomentar = () => {
        return getManager().getRepository(Komentar).find();
    };

    getKomentarByID = (id: number) => {
        return getManager().getRepository(Komentar).findOne(id);
    };

    insertKomentar = (komentar: Komentar) => {
        return getManager().getRepository(Komentar).insert(komentar);
    };

    updateKomentar = (komentar: Komentar) => {
        return getManager().getRepository(Komentar).save(komentar);
    };

    deleteKomentar = (id: number) => {
        return getManager().getRepository(Komentar).delete(id);
    };

}

