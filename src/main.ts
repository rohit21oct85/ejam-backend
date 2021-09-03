import { app } from './app';
import * as http from 'http';
const PORT = 3001;
const server = http.createServer(app);

server.listen(PORT)
server.on('listening', () => {
      console.info(`server running on port ${PORT}`);
})