import { config } from 'dotenv';
config();

import Server from './models/server';

const server = new Server();

server.listen();
