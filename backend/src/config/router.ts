import { Router } from "express";
import MovieController from "src/app/controller/MovieController";
import UserController from "src/app/controller/UserController";


const router = Router();

router.get('/movie', MovieController.getAllMovies);
router.get('/movie/:id', MovieController.getMovieByID);
router.post('/movie', MovieController.postMovie);
router.put('/movie', MovieController.putMovie);
router.delete('/movie/:id',MovieController.deleteMovie);


router.post('/user', UserController.auth);
router.get('/user', UserController.getAllUsers);

export default router;