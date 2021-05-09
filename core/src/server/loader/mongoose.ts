import mongoose from 'mongoose';
import { Db } from 'mongodb';
import { configure } from '../common/config';

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(configure.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  return connection.connection.db;
};
