import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
//middleare and parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Default route
app.get('/', (_, res) => {
    res.send({ status: true, message: 'server runinng perfectly' });
});
export default app;