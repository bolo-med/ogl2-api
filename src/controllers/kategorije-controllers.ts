import { Request, Response } from 'express';
import { Kategorija } from '../models/kategorija';
import { KategorijeRepository } from '../repositories/kategorije-repository';

export const getAllKategorija = (req: Request, res: Response) => {
    let kategorijeRepository: KategorijeRepository = new KategorijeRepository();
    kategorijeRepository.getAllkategorija().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const insertKategorija = (req: Request, res: Response) => {

    let kategorijeRepository: KategorijeRepository = new KategorijeRepository();
    let kategorija: Kategorija = new Kategorija();
    // kategorija.id = req.body.id;
    kategorija.naziv = req.body.naziv;

    kategorijeRepository.insertKategorija(kategorija).then(data => {
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

