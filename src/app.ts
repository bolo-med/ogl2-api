import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig } from './common/config';
import kategorijeRouter from './routers/kategorije-router';
import korisniciRouter from './routers/korisnici-router'
import oglasiRouter from './routers/oglasi-router';
import komentariRouter from './routers/komentari-router';
import bodyParser from 'body-parser';

class App {

    serverApp: express.Application;

    constructor() {
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.routing();
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
    }

    private routing() {
        this.serverApp.use('/kategorije', kategorijeRouter);
        this.serverApp.use('/korisnici', korisniciRouter);
        this.serverApp.use('/oglasi', oglasiRouter);
        this.serverApp.use('/komentari', komentariRouter);
    }

}

const serverInstance = new App().serverApp;
export default serverInstance;

