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

// Nece mi trebati. Insert ce se obavljati prilikom registracije.
export const insertKorisnik = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    let korisnik: Korisnik = new Korisnik();
    korisnik.ime = req.body.ime;
    korisnik.prezime = req.body.prezime;
    korisnik.username = req.body.username;
    korisnik.hashedPassword = req.body.password;
    korisnik.isAdmin = 0;
    korisniciRepository.insertKorisnik(korisnik).then(data => {
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

export const updateKorisnik = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    let korisnik: Korisnik = new Korisnik();
    korisnik.id = req.body.id;
    korisnik.ime = req.body.ime;
    korisnik.prezime = req.body.prezime;
    korisnik.username = req.body.username;
    korisnik.hashedPassword = req.body.password;
    korisnik.isAdmin = req.body.isAdmin;
    korisniciRepository.updateKorisnik(korisnik).then(data => {
        res.send({
            status: 0,
            data
        });
    }).catch(err => {
        res.send({
            status: -1,
            data: err
        });

    });
};

export const deleteKorisnik = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    korisniciRepository.deleteKorisnik(+req.params.id).then(data => {
        res.send({
            status: 0,
            data
        });
    }).catch(err => {
        res.send({
            satus: -1,
            data: err
        });
    });
};
