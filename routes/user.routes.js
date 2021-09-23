import { Router } from 'express';


import {
    usersGet,
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
} from '../controllers/user.controller';

const router = Router();

router.get('/', usersGet);
router.get('/:id', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

export default router;
