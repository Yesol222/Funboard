import { configure } from "./config";
import {createPool, Pool} from 'mysql2/promise'
// import * as mysql from 'mysql'

// export async function connect(){
//     const connection = mysql.createConnection({
//         host: configure.DB_SERVER_HOST,
//         user: configure.DB_SERVER_USER,
//         port: configure.DB_SERVER_PORT,
//         password: configure.DB_SERVER_PASSWORD,
//         database: configure.DB_SERVER_DATABASE
//     });
//     connection.connect();
// }
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: configure.DB_SERVER_HOST,
        user: configure.DB_SERVER_USER,
        port: configure.DB_SERVER_PORT,
        password: configure.DB_SERVER_PASSWORD,
        database: configure.DB_SERVER_DATABASE
    });
    return connection;
}


