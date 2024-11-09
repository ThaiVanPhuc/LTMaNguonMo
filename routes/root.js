import express from "express";
import HomeController from "../controllers/home_controller.mjs";
import CvController from "../controllers/cv_controller.mjs";
import UserController from "../controllers/user_controller";
const rootRouter = express.Router();

rootRouter.get("/user", UserController.index);
rootRouter.get("/about", HomeController.about);
rootRouter.get("/", HomeController.index);
rootRouter.get("/cv/:id", CvController.detail);

export default rootRouter;
