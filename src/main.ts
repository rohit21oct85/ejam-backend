import { app } from './app';
import * as http from 'http';
const server = http.createServer(app);

const port = process.env.PORT || 3000;
const host = "0.0.0.0";

server.listen(port)
server.on('listening', () => {
      console.info(`server running on  ${host}:${port}`);
})