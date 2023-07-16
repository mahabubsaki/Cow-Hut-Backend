import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
const app: Application = express();
//middleare and parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Application routes
app.use("/api/v1", router);

//Default route
app.get('/', (_, res) => {
    res.send({ status: true, message: 'server runinng perfectly' });
});
export default app;