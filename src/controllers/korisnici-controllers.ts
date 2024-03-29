import { KorisniciRepository } from "../repositories/korisnici-repository";
import { Request, Response } from 'express';
import { Korisnik } from "../models/korisnik";
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import passport from "passport";

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

export const getKorisnikByUsername = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    korisniciRepository.getKorisnikByUsername(req.params.ime).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    });
};

export const postojiLiKorisnicko = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    korisniciRepository.getKorisnikByUsername(req.params.ime).then(data => {
        if (data) {
            res.send(true);
        }
        else {
            res.send(false)
        }
    }).catch(err => {
        res.send(err);
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

export const register = (req: Request, res: Response) => {
    let korisniciRepository: KorisniciRepository = new KorisniciRepository();
    let korisnik: Korisnik = new Korisnik();
    korisnik.ime = req.body.ime;
    korisnik.prezime = req.body.prezime;
    korisnik.username = req.body.username;
    korisnik.hashedPassword = crypto.pbkdf2Sync(req.body.password, 'SALT', 1000, 64, 'SHA512').toString('hex');
    korisnik.isAdmin = 0;

    korisniciRepository.insertKorisnik(korisnik).then(data => {
        let datIsteka = new Date();
        datIsteka.setDate(datIsteka.getDate() + 1);

        let token = jwt.sign({
            id: data.identifiers[0].id,
            username: req.body.username,
            isAdmin: 0,
            expiry: datIsteka
        }, 'SECRET');

        res.send({
            status: 0,
            token: token
        });
    }).catch(err => {
        res.send({
            status: -1,
            error: err
        });
    });
};

export const login = (req: Request, res: Response) => {
    passport.authenticate('custom', (error, user) => {
        if (error) {
            res.send({
                status: -1,
                error: error // Vraca prazan objekat - {}. Treba li tako?
            });
        }
        else {
            let datIsteka = new Date();
            datIsteka.setDate(datIsteka.getDate() + 1);

            let token = jwt.sign({
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
                expiry: datIsteka
            }, 'SECRET');

            res.send({
                status: 0,
                token: token
            });
        }
    })(req, res);
};

