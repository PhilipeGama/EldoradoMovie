import { Router } from 'express';
import Multer from 'multer';

import AuthController from 'src/app/controller/auth.controller';
import uploadConfig from './config/multer';
import MovieController from 'src/app/controller/movie.controller';
import UserController from 'src/app/controller/user.controller';
import Auth from './app/middlewares/auth-middleware';
import GenderController from 'src/app/controller/gender.controller';

const upload = Multer(uploadConfig);
const router = Router();

router.post('/auth', AuthController.auth);
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.postUser);
router.put('/users', UserController.putUser);

//router.use(Auth);

router.get('/genders', GenderController.getAllGender);
router.post('/genders', GenderController.postGender);
router.put('/genders', GenderController.putGender);

router.get('/movies', MovieController.getAllMovies);
// router.get('/deleteimg', MovieController.deleteFile);
router.get('/movies/:id', MovieController.getMovieByID);
router.post('/movies', upload.single('poster'), MovieController.postMovie);
router.put('/movies/:id', upload.single('poster'), MovieController.putMovie);
router.delete('/movies/:id', MovieController.deleteMovie);

export default router;
