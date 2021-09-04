import express from 'express';
import cors from 'cors';
import {requestLoggerMiddleware} from './request.logger.middleware'
import config from './config/config'
import mongoose from 'mongoose'

import deployment from './routes/deployment.routes'
import template from './routes/template.routes'

const app = express();
app.use(cors());

app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb', extended: true}));

/* connect mongo db */
mongoose.connect(config.mongo.url, config.mongo.options)
.then(result => { 
      console.info(`mongodb connected`)
})
.catch(error => {
      console.error(`coonectionn error ${error.message}, ${error}`)
})

app.use(requestLoggerMiddleware)

/** RoutesList */
app.use('/api/deployment', deployment)
app.use('/api/template', template)

export { app };