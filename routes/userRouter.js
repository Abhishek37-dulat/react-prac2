import express from "express";
import {allUser, oneUser, postUser, updateUser, deleteUser} from '../controllers/userController.js'
 
const router = express.Router();

router.get('/',allUser);
router.get('/:id',oneUser);
router.post('/',postUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;