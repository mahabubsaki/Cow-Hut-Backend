import express from "express";
import userRouter from "../modules/users/user.route";
const router = express.Router();

const applicationRoutes = [
    { path: '/users', controller: userRouter },
];

export default router;
