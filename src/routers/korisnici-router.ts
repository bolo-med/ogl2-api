import express from 'express';
import * as korisniciControllers from './../controllers/korisnici-controllers';
import expressjwt from 'express-jwt';

const korisniciRouter = express.Router();

korisniciRouter.route('/korisnici').get(korisniciControllers.getAllKorisnik)
                                   .put(korisniciControllers.updateKorisnik);

korisniciRouter.route('/korisnici/:id').get(korisniciControllers.getKorisnikByID)
                                       .delete(korisniciControllers.deleteKorisnik);

korisniciRouter.post('/register', korisniciControllers.register);

export default korisniciRouter;

