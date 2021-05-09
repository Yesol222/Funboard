import { config } from 'dotenv';

export interface Configure {
    IS_DEV: boolean
    DEV_URL: string
    PORT: number

    JWT_SECRET: string

    MSP_RELATIVE_PATH: string
    ADMIN_MSP_PATH: string
    USER1_MSP_PATH: string
    USER2_MSP_PATH: string

    ADMIN_ID: string
    CHANNEL_NAME: string
    CHAINCODE_NAME: string
    MSP_ID: string

    CONNECTION_PATH: string

    MONGO_URI : string
    MONGO_PORT : number
    DB_SERVER_HOST : string
    DB_SERVER_PORT : number
    DB_SERVER_USER : string
    DB_SERVER_PASSWORD : string
    DB_SERVER_DATABASE : string
}

class ConstSingleton {
    private static instance: ConstSingleton;
    private static configureData: Configure;

    get configure() {
        return ConstSingleton.configureData;
    }

    private constructor() {
        config();

        ConstSingleton.configureData = {
            IS_DEV: (process.env.IS_DEV || 'false') == 'true',
            DEV_URL: process.env.DEV_URL || '',
            PORT: parseInt(process.env.PORT || '3000'),

            JWT_SECRET: process.env.JWT_SECRET || '',

            MSP_RELATIVE_PATH: process.env.MSP_RELATIVE_PATH || '',
            ADMIN_MSP_PATH: process.env.ADMIN_MSP_PATH || '',
            USER1_MSP_PATH: process.env.USER1_MSP_PATH || '',
            USER2_MSP_PATH: process.env.USER2_MSP_PATH || '',

            ADMIN_ID: process.env.ADMIN_ID || '',
            CHANNEL_NAME: process.env.CHANNEL_NAME || '',
            CHAINCODE_NAME: process.env.CHAINCODE_NAME || '',
            MSP_ID: process.env.MSP_ID || '',

            CONNECTION_PATH: process.env.CONNECTION_PATH || '',

            MONGO_URI : process.env.MONGO_URI || '',
            MONGO_PORT : parseInt(process.env.PORT || '4000'),
            DB_SERVER_HOST : process.env.DB_SERVER_HOST || '',
            DB_SERVER_USER : process.env.DB_SERVER_USER || '',
            DB_SERVER_PORT : parseInt(process.env.PORT || '3306'),
            DB_SERVER_PASSWORD : process.env.DB_SERVER_PASSWORD || '',
            DB_SERVER_DATABASE : process.env.DB_SERVER_DATABASE || '',
        };
    }

    static getInstance(): ConstSingleton {
        if (!ConstSingleton.instance) {
            ConstSingleton.instance = new ConstSingleton();
        }
        return ConstSingleton.instance;
    }

}


export const configure = ConstSingleton.getInstance().configure;
