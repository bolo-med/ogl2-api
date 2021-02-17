import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig } from './common/config';
import kategorijeRouter from './routers/kategorije-router';
import korisniciRouter from './routers/korisnici-router'
import oglasiRouter from './routers/oglasi-router';
import komentariRouter from './routers/komentari-router';
import podkategorijeRouter from './routers/podkategorije-router';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import passport from 'passport';
import passportCustom from 'passport-custom';
import crypto from 'crypto';
import { KorisniciRepository } from './repositories/korisnici-repository';
import uploadRouter from './../src/common/file-upload';

class App {

    serverApp: express.Application;

    constructor() {
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.routing();
        this.authConfig();
    }

    private connectToDB() {
        createConnection(dbConfig).then(connection => {
            console.log('Uspjesno povezivanje sa db-serverom!');
        }).catch(err => {
            console.log('Greska prilikom povezovanja sa db-serverom!');
        });
    };

    private config() {
        this.serverApp.use(bodyParser.json());

        this.serverApp.use((request: Request, response: Response, next) => {
            response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            response.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin, Authorization');
            response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // response.setHeader("Access-Control-Allow-Credentials", "true"); // sa interneta
            response.header("Access-Control-Allow-Credentials", "true"); // radi i ovako

            next();
        });
    }

    private routing() {
        this.serverApp.use('/kategorije', kategorijeRouter);
        this.serverApp.use('', korisniciRouter);
        this.serverApp.use('/oglasi', oglasiRouter);
        this.serverApp.use('/komentari', komentariRouter);
        this.serverApp.use('/podkategorije', podkategorijeRouter);
        this.serverApp.use('/upload', uploadRouter);
    }

    private authConfig() {

        passport.use('custom', new passportCustom.Strategy((request, done) => {
            let korisniciRepository = new KorisniciRepository();
            korisniciRepository.getKorisnikByUsername(request.body.username).then(data => {
                let hash = crypto.pbkdf2Sync(request.body.password, 
                                             'SALT', 
                                             1000, 
                                             64, 
                                             'SHA512').toString('hex');

                if (hash.toLowerCase() === data.hashedPassword.toLowerCase()) {
                    done(null, data);
                }
                else {
                    done('Pogresni kredencijali!');
                }
            }).catch(err => {
                done(err);
            });
        }));

        this.serverApp.use(passport.initialize());
    }

}

const serverInstance = new App().serverApp;
export default serverInstance;

