import { Response, Request } from 'express';
import { Oglas } from '../models/oglas';
import { OglasiRepository } from "../repositories/oglasi-repository";

export const getAllOglas = (req: Request, res: Response) => {
    let oglasiRepository: OglasiRepository = new OglasiRepository();
    oglasiRepository.getAllOglas().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getOglasByID = (req: Request, res: Response) => {
    let oglasiRepository: OglasiRepository = new OglasiRepository();
    oglasiRepository.getOglasByID(+req.params.id).then(data => {
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

export const insertOglas = (req: Request, res: Response) => {
    let oglasiRepository: OglasiRepository = new OglasiRepository();
    let oglas: Oglas = new Oglas();
    oglas.naslov = req.body.naslov;
    oglas.tekst = req.body.tekst;
    oglas.fotografije = req.body.fotografije;
    oglas.datumObjave = req.body.datumObjave;
    oglas.datumVazenja = req.body.datumVazenja;
    oglas.arhiviran = 0;
    oglas.kategorijaID = req.body.kategorijaID;
    oglas.podkategorijaID = req.body.podkategorijaID;
    oglas.korisnikID = req.body.korisnikID;
    oglasiRepository.insertOglas(oglas).then(data => {
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

export const updateOglas = (req: Request, res: Response) => {
    let oglasiRepository: OglasiRepository = new OglasiRepository();
    let oglas: Oglas = new Oglas();
    oglas.id = req.body.id;
    oglas.naslov = req.body.naslov;
    oglas.tekst = req.body.tekst;
    oglas.fotografije = req.body.fotografije;
    oglas.datumObjave = req.body.datumObjave;
    oglas.datumVazenja = req.body.datumVazenja;
    oglas.kategorijaID = req.body.kategorijaID;
    oglas.podkategorijaID = req.body.podkategorijaID;
    oglas.korisnikID = req.body.korisnikID;
    oglasiRepository.updateOglas(oglas).then(data => {
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

export const deleteOglas = (req: Request, res: Response) => {
    let oglasiRepository: OglasiRepository = new OglasiRepository();
    oglasiRepository.deleteOglas(+req.params.id).then(data => {
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

