import express from "express";
import userRouter from "../modules/users/user.route";
import cowRouter from "../modules/cows/cow.route";
const router = express.Router();

const applicationRoutes = [
    { path: '/users', controller: userRouter },
    { path: '/cows', controller: cowRouter }
];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;
