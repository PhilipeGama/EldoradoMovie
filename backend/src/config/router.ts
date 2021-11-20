import { Router } from "express";
import MovieController from "src/controller/MovieController";


const router = Router();

router.get('/movie', MovieController.getAllMovies);
router.get('/movie/:id', MovieController.getMovieByID);
router.post('/movie', MovieController.postMovie);
router.put('/movie', MovieController.putMovie);
router.delete('/movie/:id',MovieController.deleteMovie);


export default router;