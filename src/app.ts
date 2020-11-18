import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig } from './common/config';
import kategorijeRouter from './routers/kategorije-router';
import korisniciRouter from './routers/korisnici-router'
import oglasiRouter from './routers/oglasi-router';
import komentariRouter from './routers/komentari-router';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

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
    }

}

const serverInstance = new App().serverApp;
export default serverInstance;

