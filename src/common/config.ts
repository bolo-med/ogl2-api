import { ConnectionOptions } from 'typeorm';
import path from 'path';

export const dbConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root', 
    password: 'root',
    database: 'oglasi_db',
    entities: [
        path.join(__dirname, "./../models/*.ts")
    ]
};

