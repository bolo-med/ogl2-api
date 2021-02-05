import express from 'express';
import * as kategorijeControllers from './../controllers/kategorije-controllers';
import expressjwt from 'express-jwt';

const kategorijeRouter = express.Router();

// let auth = expressjwt({
//     secret: 'SECRET',
//     userProperty: 'body.userData',
//     algorithms: ['HS256']
// });

kategorijeRouter.route('').get(kategorijeControllers.getAllKategorija)
                          .post(kategorijeControllers.insertKategorija)
                          .put(kategorijeControllers.updateKategorija);

kategorijeRouter.route('/:id').get(kategorijeControllers.getKategorijaByID)
                              .delete(kategorijeControllers.deleteKategorija);

export default kategorijeRouter;

// Npr. za get po ID-u (u Postmanu): http://localhost:3000/kategorije/5

