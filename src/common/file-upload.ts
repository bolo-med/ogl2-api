import multer from 'multer';
import express from 'express';
import path from 'path';
import { Request, Response } from 'express';

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

let ulpoadMulter = multer({storage: storage});

let uploadRouter = express.Router();

uploadRouter.post('', 
                  ulpoadMulter.single('img'), 
                  (request: Request, response: Response) => {
                      if (!request.file) {
                        response.send({
                            status: -1,
                            message: "Nema fajla za aploudovanje"
                        });
                      }
                      else {
                        response.send({
                            status: 0,
                            message: "Fajl je aploudovan",
                            filename: request.file.filename
                        });
                      }
                  });

export default uploadRouter;

