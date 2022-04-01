import express, { urlencoded } from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import cors from 'cors';
import { router } from '../routes/routes';
import path from 'path'
class App {
    app: express.Application;
    path: string
    constructor() {
        this.app = express();
        this.path = path.resolve(__dirname, '../views')
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        this.app.set('views', this.path);
        this.app.set('view engine', 'ejs');
    }
    private routes() {
        this.app.use(router);
    }
}

export default new App().app;
