import express from 'express';
import * as kategorijeControllers from './../controllers/kategorije-controllers';

const kategorijeRouter = express.Router();

kategorijeRouter.route('').get(kategorijeControllers.getAllKategorija)
                          .post(kategorijeControllers.insertKategorija);

export default kategorijeRouter;

