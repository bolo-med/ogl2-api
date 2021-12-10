import express from 'express';
import * as korisniciControllers from './../controllers/korisnici-controllers';

const korisniciRouter = express.Router();

korisniciRouter.route('/korisnici').get(korisniciControllers.getAllKorisnik)
                                   .put(korisniciControllers.updateKorisnik);

korisniciRouter.route('/korisnici/id/:id').get(korisniciControllers.getKorisnikByID)
                                       .delete(korisniciControllers.deleteKorisnik);

korisniciRouter.route('/korisnici/ime/:ime').get(korisniciControllers.getKorisnikByUsername);

korisniciRouter.route('/korisnici/postoji/:ime').get(korisniciControllers.postojiLiKorisnicko);

korisniciRouter.post('/register', korisniciControllers.register);
korisniciRouter.post('/login', korisniciControllers.login);

export default korisniciRouter;

