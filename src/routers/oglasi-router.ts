import express from 'express';
import * as oglasiControllers from './../controllers/oglasi-controllers';

const oglasiRouter = express.Router();

oglasiRouter.route('').get(oglasiControllers.getAllOglas)
                      .post(oglasiControllers.insertOglas)
                      .put(oglasiControllers.updateOglas);

oglasiRouter.route('/:id').get(oglasiControllers.getOglasByID)
                          .delete(oglasiControllers.deleteOglas);

export default oglasiRouter;

