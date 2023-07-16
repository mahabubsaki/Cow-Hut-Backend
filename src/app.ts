import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
import sendResponse from './shared/sendResponse';
const app: Application = express();
//middleare and parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Application routes
app.use("/api/v1", router);

//Default route
app.get('/', (_, res) => {
    sendResponse(res, { statusCode: 200, success: true, message: "server runinng perfectly" });
});
export default app;