import mongoose from 'mongoose';
import {
  DB_CONNECTION_STRING,
  DB_HOST,
  DB_PORT,
  DB_NAME
} from '../utils/env';
import loggerApp from '../utils/logger';

const getMongoUri = () => {
  if (DB_CONNECTION_STRING) {
    return DB_CONNECTION_STRING;
  }
  return `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
};

const connectDB = async () => {
  try {
    const uri = getMongoUri();
    await mongoose.connect(uri);
    loggerApp.info('MongoDB connected successfully');
    mongoose.connection.on('error', (err) => {
      loggerApp.error('MongoDB connection error:', err);
      process.exit(1);
    });
  } catch (error) {
    loggerApp.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
export default connectDB;