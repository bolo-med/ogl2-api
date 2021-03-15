import { getManager } from "typeorm";
import { Oglas } from "../models/oglas";

export class OglasiRepository {

    getAllOglas = () => {
        return getManager().getRepository(Oglas).find({relations: ['kategorija', 'podkategorija', 'korisnik']});
    };

    getOglasByID = (id: number) => {
        return getManager().getRepository(Oglas).findOne(id);
    };

    insertOglas = (oglas: Oglas) => {
        return getManager().getRepository(Oglas).insert(oglas);
    };

    updateOglas = (oglas: Oglas) => {
        return getManager().getRepository(Oglas).save(oglas);
    };

    deleteOglas = (id: number) => {
        return getManager().getRepository(Oglas).delete(id);
    };

}

