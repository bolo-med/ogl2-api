import { Request, Response } from 'express';
import { Podkategorija } from '../models/podkategorija';
import { PodkategorijeRepository } from '../repositories/podkategorije-repository';

export const getAllPodkategorija = (req: Request, res: Response) => {
    let podkategorijeRepository: PodkategorijeRepository = new PodkategorijeRepository();
    podkategorijeRepository.getAllPodkategorija().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

export const getPodkategorijaByID = (req: Request, res: Response) => {
    let podkategorijaRepository: PodkategorijeRepository = new PodkategorijeRepository();
    podkategorijaRepository.getPodkategorijaBuId(+req.params.id).then(data => {
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

export const insertPodkategorija = (req: Request, res: Response) => {
    let podkategorijaRepository: PodkategorijeRepository = new PodkategorijeRepository();
    let podkategorija: Podkategorija = new Podkategorija();
    podkategorija.id = null;
    podkategorija.kategorijaID = req.body.kategorijaID;
    podkategorija.naziv = req.body.naziv;
    podkategorijaRepository.insertpodkategorija(podkategorija).then(data => {
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

export const updatePodkategorija = (req: Request, res: Response) => {
    let podkategorijaRepository: PodkategorijeRepository = new PodkategorijeRepository();
    let podkategorija: Podkategorija = new Podkategorija();
    podkategorija.id = req.body.id;
    podkategorija.kategorijaID = req.body.kategorijaID;
    podkategorija.naziv = req.body.naziv;
    podkategorijaRepository.updatePodkategorija(podkategorija).then(data => {
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

export const deletePodkategorija = (req: Request, res: Response) => {
    let podkategorijaRepository: PodkategorijeRepository = new PodkategorijeRepository();
    podkategorijaRepository.deletePodkategorija(+req.params.id).then(data => {
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

