import express from 'express';
import * as kategorijeControllers from './../controllers/kategorije-controllers';

const kategorijeRouter = express.Router();

kategorijeRouter.route('').get(kategorijeControllers.getAllKategorija)
                          .post(kategorijeControllers.insertKategorija)
                          .put(kategorijeControllers.updateKategorija);

kategorijeRouter.route('/:id').get(kategorijeControllers.getKategorijaByID)
                              .delete(kategorijeControllers.deleteKategorija);

export default kategorijeRouter;

// Npr. za get po ID-u (u Postmanu): http://localhost:3000/kategorije/5

