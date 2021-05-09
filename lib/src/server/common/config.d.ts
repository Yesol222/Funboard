export interface Configure {
    IS_DEV: boolean;
    DEV_URL: string;
    PORT: number;
    JWT_SECRET: string;
    MSP_RELATIVE_PATH: string;
    ADMIN_MSP_PATH: string;
    USER1_MSP_PATH: string;
    USER2_MSP_PATH: string;
    ADMIN_ID: string;
    CHANNEL_NAME: string;
    CHAINCODE_NAME: string;
    MSP_ID: string;
    CONNECTION_PATH: string;
    MONGO_URI: string;
    MONGO_PORT: number;
    DB_SERVER_HOST: string;
    DB_SERVER_PORT: number;
    DB_SERVER_USER: string;
    DB_SERVER_PASSWORD: string;
    DB_SERVER_DATABASE: string;
}
export declare const configure: Configure;
