import { Request, Response, Router } from "express";
import MovieController from "src/controller/MovieController";



const router = Router();

router.get('/movie', MovieController.createMovie);


export default router;