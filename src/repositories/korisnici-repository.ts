import { getManager } from "typeorm";
import { Korisnik } from "../models/korisnik";

export class KorisniciRepository {

    getAllKorisnik = () => {
        return getManager().getRepository(Korisnik).find();
    };

    getKorisnikByID = (id: number) => {
        return getManager().getRepository(Korisnik).findOne(id);
    };

    insertKorisnik = (korisnik: Korisnik) => {
        return getManager().getRepository(Korisnik).insert(korisnik);
    };

    updateKorisnik = (korisnik: Korisnik) => {
        return getManager().getRepository(Korisnik).save(korisnik);
    };

    deleteKorisnik = (id: number) => {
        return getManager().getRepository(Korisnik).delete(id);
    };

}

