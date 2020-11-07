import { Request, Response } from 'express';
import { Komentar } from '../models/komentar';
import { KomentariRepository } from '../repositories/komentari-repository';

export const getAllKomentar = (req: Request, res: Response) => {
    let komentariRepository: KomentariRepository = new KomentariRepository();
    komentariRepository.getAllKomentar().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getKomentarByID = (req: Request, res: Response) => {
    let komentariRepository: KomentariRepository = new KomentariRepository();
    komentariRepository.getKomentarByID(+req.params.id).then(data => {
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

export const insertKomentar = (req: Request, res: Response) => {
    let komentariRepository: KomentariRepository = new KomentariRepository();
    let komentar: Komentar = new Komentar();
    komentar.tekst = req.body.tekst;
    komentar.datum = req.body.datum;
    komentar.oglasID = req.body.oglasID;
    komentar.korisnikID = req.body.korisnikID;
    komentariRepository.insertKomentar(komentar).then(data => {
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

export const updateKomentar = (req: Request, res: Response) => {
    let komentariRepository: KomentariRepository = new KomentariRepository();
    let komentar: Komentar = new Komentar();
    komentar.id = req.body.id;
    komentar.tekst = req.body.tekst;
    komentar.datum = req.body.datum;
    komentar.oglasID = req.body.oglasID;
    komentar.korisnikID = req.body.korisnikID;
    komentariRepository.updateKomentar(komentar).then(data => {
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

export const deleteKomentar = (req: Request, res: Response) => {
    let komentariRepository: KomentariRepository = new KomentariRepository();
    komentariRepository.deleteKomentar(+req.params.id).then(data => {
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

