import { KorisniciRepository } from "../repositories/korisnici-repository";
import { Request, Response } from 'express';
import { Korisnik } from "../models/korisnik";


export const getAllKorisnik = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    korisniciRepository.getAllKorisnik().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getKorisnikByID = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    korisniciRepository.getKorisnikByID(+req.params.id).then(data => {
        res.send({
            status: 0,
            data: data
        });
    }).catch(err => {
        res.send({
            status: -1,
            data: err
        });
    });
};

// Ne treba mi. Insert ce se obavljati prilikom registracije.
// export const insertKorisnik = (req: Request, res: Response) => {
//     let korisniciRepository: KorisniciRepository = new KorisniciRepository();
//     let korisnik: Korisnik = new Korisnik();
//     korisnik.ime = req.body.ime;
//     korisnik.prezime = req.body.prezime;

// };

