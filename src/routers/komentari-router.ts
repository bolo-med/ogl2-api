import express from 'express';
import * as komentariControllers from './../controllers/komentari-controllers';

const komentariRouter = express.Router();

komentariRouter.route('').get(komentariControllers.getAllKomentar)
                         .post(komentariControllers.insertKomentar)
                         .put(komentariControllers.updateKomentar);

komentariRouter.route('/:id').get(komentariControllers.getKomentarByID)
                             .delete(komentariControllers.deleteKomentar);

export default komentariRouter;

