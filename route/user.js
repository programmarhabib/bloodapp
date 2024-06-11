import express from 'express';
import { CreateUser, DeleteUser, UpdateUser, getAllUsers, getSingleUser } from '../controllers/userController.js';
import { userPhoto } from '../utils/multer.js';


//init router from express
const router = express.Router();

//routing
router.route('/').get(getAllUsers).post(userPhoto, CreateUser);
router.route('/:id').delete(DeleteUser).put(UpdateUser).patch(UpdateUser).get(getSingleUser);

//export default router
export default router;