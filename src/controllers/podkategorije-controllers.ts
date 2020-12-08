import { Request, Response } from 'express';
import { PodkategorijeRepository } from '../repositories/podkategorije-repository';

export const getAllPodkategorija = (req: Request, res: Response) => {
    let podkategorijeRepository: PodkategorijeRepository = new PodkategorijeRepository();
    podkategorijeRepository.getAllPodkategorija().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
};

