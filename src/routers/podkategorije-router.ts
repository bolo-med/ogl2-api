import express from 'express';
import * as podkategorijeControllers from './../controllers/podkategorije-controllers';

const kategorijeRouter = express.Router();

kategorijeRouter.route('').get(podkategorijeControllers.getAllPodkategorija)
                          .post(podkategorijeControllers.insertPodkategorija)
                          .put(podkategorijeControllers.updatePodkategorija);

kategorijeRouter.route('/:id').get(podkategorijeControllers.getPodkategorijaByID)
                              .delete(podkategorijeControllers.deletePodkategorija);

export default kategorijeRouter;

