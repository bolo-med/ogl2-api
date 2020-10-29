import express from 'express';
import * as korisniciControllers from './../controllers/korisnici-controllers';

const korisniciRouter = express.Router();

korisniciRouter.route('').get(korisniciControllers.getAllKorisnik)
                         .post(korisniciControllers.insertKorisnik)
                         .put(korisniciControllers.updateKorisnik);

korisniciRouter.route('/:id').get(korisniciControllers.getKorisnikByID)
                             .delete(korisniciControllers.deleteKorisnik);

export default korisniciRouter;

