import express, { urlencoded } from 'express';
import cors from 'cors';
import { router } from './routes/routes';
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
    }
    private routes() {
        this.app.use(router);
    }
}

export default new App().app;
