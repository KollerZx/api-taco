import express, { urlencoded } from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import cors from 'cors';
import { router } from '../routes/routes';
class App {
    app: express.Application;
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    }
    private routes() {
        this.app.use(router);
    }
}

export default new App().app;
