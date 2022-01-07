import { Router } from "express";
import Multer  from 'multer';

import AuthController from "src/app/controller/AuthController";
import uploadConfig from './multer';
import MovieController from "src/app/controller/MovieController";
import UserController from "src/app/controller/UserController";
import Auth from '../app/middlewares/AuthMiddleware';
import GenderController from "src/app/controller/GenderController";

const upload = Multer(uploadConfig);
const router = Router();


router.post('/auth', AuthController.auth);
router.get('/user', UserController.getAllUsers);
router.post('/user', UserController.postUser);


// router.use(Auth);
router.get('/movie', MovieController.getAllMovies);
// router.get('/deleteimg', MovieController.deleteFile);
router.get('/movie/:id', MovieController.getMovieByID);
router.post('/movie', upload.single('poster'), MovieController.postMovie);
router.put('/movie', MovieController.putMovie);
router.delete('/movie/:id',MovieController.deleteMovie);


router.get('/gender', GenderController.getAllGender);


export default router;