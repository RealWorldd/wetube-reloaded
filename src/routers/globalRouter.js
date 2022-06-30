import express from "express";
import {trending, search} from "../controllers/videoController";
import {join, login, logout, see} from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
