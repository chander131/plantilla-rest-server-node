import express from 'express';
import cors from 'cors';
import MongoConnection from '../db/config';

// const userController = require('../routes/user.routes');
import UserRoutes from '../routes/user.routes';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRoutes = '/api/users';

        // Conexion a DB
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {
        await MongoConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.use('/api/users', userController);
        this.app.use(this.userRoutes, UserRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('###############################################');
            console.log('###############################################');
            console.log('###############################################');
            console.log('###############################################');
            console.log(`### Server run in http://localhost:${this.port} ###`);
            console.log('###############################################');
            console.log('###############################################');
            console.log('###############################################');
            console.log('###############################################');
        });
    }
}

export default Server;
