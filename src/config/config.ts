import dotenv from 'dotenv'

dotenv.config();

const MONGO_OPTIONS = {
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      autoIndex: false,
      retryWrites: false,
      esModuleInterop: true
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'ejam-root-user';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'Admin@2021';
const MONGO_HOST = process.env.MONGO_HOST || 'ejamcluster.kjdzr.mongodb.net';
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'ejam-db';

const MONGO = {
      host: MONGO_HOST,
      username: MONGO_USERNAME,
      password: MONGO_PASSWORD,
      database: MONGO_DATABASE,
      options: MONGO_OPTIONS,
      url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || '3000'

const SERVER = {
      hostname: SERVER_HOSTNAME,
      port: SERVER_PORT
}

const config = {
      mongo: MONGO,
      server: SERVER
}

export default config;